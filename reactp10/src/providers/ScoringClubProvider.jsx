import { useState, useEffect } from "react";
import { ScoringClubContext } from "../context/ScoringClubContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function ScoringClubProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();

  const [clubScoring, setClubScoring] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.user_id || !supabase) {
      setClubScoring([]);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function loadClubScoring() {
      setLoading(true);

      try {
        const { data, error } = await supabase.rpc(
          "get_club_scoring_all",
          { p_user_id: user.user_id }
        );

        if (error) throw error;
        if (cancelled) return;

        setClubScoring(data || []);
      } catch (err) {
        if (!cancelled) {
          console.error("CLUB SCORING PROVIDER ERROR:", err.message);
          setClubScoring([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadClubScoring();

    return () => {
      cancelled = true;
    };
  }, [supabase, user?.user_id]);

  return (
    <ScoringClubContext.Provider value={{ clubScoring, loading }}>
      {children}
    </ScoringClubContext.Provider>
  );
}
