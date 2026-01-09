import { useState, useEffect } from 'react';
import { StatsUserLeagueTableContext } from "../context/StatsUserLeagueTableContext"
import { useDatabase } from '../hooks/useDatabase';
import { useUser } from '../hooks/useUser';

export function StatsUserLeagueTableProvider({ children }) {
    const { supabase } = useDatabase();
    const { user } = useUser();
    const userId = user?.user_id;
    const [ userStatsLeagueTable, setUserStatsLeagueTable] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId || !supabase) return;
        

        async function loadUserStats() {
            setLoading(true);

            try {
                const { data, error } = await supabase.rpc("get_user_predicted_league_table", {
                    p_user_id: userId,
                });

                if (error) throw error;

                setUserStatsLeagueTable(data || []);
                console.log("useStatsProvider", data);
            } catch (err) {
                console.log("USER STATS PROVIDER ERROR", err.message);
                setUserStatsLeagueTable([]);
            } finally {
                setLoading(false);
            }
        }

        loadUserStats();
    }, [supabase, userId]);

    return (
        <StatsUserLeagueTableContext.Provider 
            value={{ 
                userStatsLeagueTable, loading 
            }}>
            {children}
        </StatsUserLeagueTableContext.Provider>
    );
}