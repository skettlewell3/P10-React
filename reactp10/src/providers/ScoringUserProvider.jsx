import { useState, useEffect } from "react";
import { ScoringUserContext } from "../context/ScoringUserContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function ScoringUserProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();

  const [userScoring, setUserScoring] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.user_id || !supabase) {
      setUserScoring([]);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function loadUserScoring() {
      setLoading(true);

      try {
        const { data, error } = await supabase.rpc(
          "get_user_scoring_all",
          { p_user_id: user.user_id }
        );

        if (error) throw error;
        if (cancelled) return;

        setUserScoring(data || []);
      } catch (err) {
        if (!cancelled) {
          console.error("USER SCORING PROVIDER ERROR:", err.message);
          setUserScoring([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadUserScoring();

    return () => {
      cancelled = true;
    };
  }, [supabase, user?.user_id]);

  return (
    <ScoringUserContext.Provider value={{ userScoring, loading }}>
      {children}
    </ScoringUserContext.Provider>
  );
}
