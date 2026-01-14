import { useState, useEffect, useCallback } from "react";
import { UserClubsContext } from "../context/UserClubsContext";
import { useUser } from "../hooks/useUser";
import { useDatabase } from "../hooks/useDatabase";

export function UserClubsProvider({ children }) {
  const { user } = useUser();
  const { supabase } = useDatabase();

  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClubs = useCallback(async () => {
    if (!user?.user_id || !supabase) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc("get_users_clubs", { p_user_id: user.user_id });

      if (error) throw error;

      setClubs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching user clubs:", err);
      setError(err.message);
      setClubs([]);
    } finally {
      setLoading(false);
    }
  }, [supabase, user?.user_id]);

  useEffect(() => {
    fetchClubs();
  }, [fetchClubs]);

  const getClubById = (id) => clubs.find((c) => c.club_id === id);

  const getDefaultClub = () => {
    if (!clubs || clubs.length === 0) return null;

    const owned = clubs.find((c) => c.role === "owner");
    if (owned) return owned;

    return clubs[0];
  };

  return (
    <UserClubsContext.Provider value={{ clubs, loading, error, getClubById, getDefaultClub }}>
      {children}
    </UserClubsContext.Provider>
  );
}
