import { useState, useEffect } from 'react';
import { StatsClubLeagueTableContext } from "../context/StatsClubLeagueTableContext"
import { useDatabase } from '../hooks/useDatabase';
import { useUser } from '../hooks/useUser';

export function StatsClubLeagueTableProvider({ children }) {
    const { supabase } = useDatabase();
    const { user } = useUser();
    const userId = user?.user_id;
    const [ clubStatsLeagueTable, setClubStatsLeagueTable] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId || !supabase) {
            setLoading(false);
            return;
        } 
        

        async function loadClubLeagueTable() {
            setLoading(true);

            try {
                const { data, error } = await supabase.rpc("get_club_predicted_league_tables", {
                    p_user_id: userId,
                });

                if (error) throw error;

                setClubStatsLeagueTable(data || []);
                console.log("useClubLeagueTableProvider", data);
            } catch (err) {
                console.log("CLUB LEAGUE TABLE PROVIDER ERROR", err.message);
                setClubStatsLeagueTable([]);
            } finally {
                setLoading(false);
            }
        }

        loadClubLeagueTable();
    }, [supabase, userId]);

    return (
        <StatsClubLeagueTableContext.Provider 
            value={{ 
                clubStatsLeagueTable, loading 
            }}>
            {children}
        </StatsClubLeagueTableContext.Provider>
    );
}