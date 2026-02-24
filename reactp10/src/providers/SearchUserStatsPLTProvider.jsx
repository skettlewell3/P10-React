import { useState, useCallback } from "react";
import { SearchUserStatsPLTContext } from "../context/SearchUserStatsPLTContext";
import { useDatabase } from "../hooks/useDatabase";

export function SearchUserStatsPLTProvider({ children }) {
  const { supabase } = useDatabase();

  const [userPLTById, setUserPLTById] = useState({});
  const [loadingById, setLoadingById] = useState({});

  const fetchUserPLT = useCallback(
    async (targetUserId) => {
      if (!targetUserId || !supabase) return;

      if (!userPLTById[targetUserId]) {
        setLoadingById(prev => ({
          ...prev,
          [targetUserId]: true
        }));
      }

      try {
        const { data, error } = await supabase.rpc(
          "get_user_predicted_league_table",
          { p_user_id: targetUserId }
        );

        if (error) throw error;

        setUserPLTById(prev => ({
          ...prev,
          [targetUserId]: data ?? []
        }));

      } catch (err) {
        console.error("USER PLT ERROR:", err.message);

        setUserPLTById(prev => ({
          ...prev,
          [targetUserId]: []
        }));

      } finally {
        setLoadingById(prev => ({
          ...prev,
          [targetUserId]: false
        }));
      }
    },
    [supabase, userPLTById]
  );

  return (
    <SearchUserStatsPLTContext.Provider
      value={{
        userPLTById,
        loadingById,
        fetchUserPLT
      }}
    >
      {children}
    </SearchUserStatsPLTContext.Provider>
  );
}