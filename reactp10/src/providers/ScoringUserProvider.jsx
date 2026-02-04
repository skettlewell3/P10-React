import { useState, useEffect, useCallback } from "react";
import { ScoringUserContext } from "../context/ScoringUserContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function ScoringUserProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();

  const [userScoring, setUserScoring] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUserScoring = useCallback(async () => {
    if (!user?.user_id || !supabase) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc(
        "get_user_scoring_all",
        { p_user_id: user.user_id }
      );
      if (error) throw error;
      setUserScoring(data || []);
    } catch (err) {
      console.error("USER SCORING PROVIDER ERROR:", err.message);
      setUserScoring([]);
    } finally {
      setLoading(false);
    }
  }, [supabase, user?.user_id]);

  useEffect(() => {
    loadUserScoring();
  }, [loadUserScoring]);

  return (
    <ScoringUserContext.Provider value={{ userScoring, loading, loadUserScoring }}>
      {children}
    </ScoringUserContext.Provider>
  );
}
