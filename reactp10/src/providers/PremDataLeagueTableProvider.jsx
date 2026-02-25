import { useState, useCallback } from "react";
import { PremDataLeagueTableContext } from "../context/PremDataLeagueTableContext";
import { useDatabase } from "../hooks/useDatabase";

export function PremDataLeagueTableProvider({ children }) {
  const { supabase } = useDatabase();

  const [overallTable, setOverallTable] = useState([]);
  const [homeTable, setHomeTable] = useState([]);
  const [awayTable, setAwayTable] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshPremLeagueTables = useCallback(async () => {
    if (!supabase) return;

    setLoading(true);

    try {
      const { data, error } = await supabase.rpc("get_prem_league_tables");

      if (error) throw error;

      if (!data) return;

      // Split tables
      const overall = data.filter(row => row.table_type === "overall");
      const home = data.filter(row => row.table_type === "home");
      const away = data.filter(row => row.table_type === "away");

      setOverallTable(overall);
      setHomeTable(home);
      setAwayTable(away);

      console.log("overall:", overall);
      console.log("home:", home);
      console.log("away:", away);

    } catch (err) {
      console.error("PREM TABLE ERROR:", err.message);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  return (
    <PremDataLeagueTableContext.Provider
      value={{
        overallTable,
        homeTable,
        awayTable,
        loading,
        refreshPremLeagueTables
      }}
    >
      {children}
    </PremDataLeagueTableContext.Provider>
  );
}