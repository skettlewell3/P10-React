import { useState, useEffect, useCallback } from "react";
import { HoFClubContext } from "../context/HoFClubContext";
import { useDatabase } from "../hooks/useDatabase";

export function HoFClubProvider({ children }) {
    const { supabase } = useDatabase();

    const [clubHallOfFame, setClubHallOfFame] = useState({
        highestScoringWeeks: [],
        mostGwWins: [],
        mostPerfect10s: [],
        mostCorrectResults: []
    });

    const [clubHoFLoading, setClubHoFLoading] = useState(true);

    const refreshClubHallOfFame = useCallback(async () => {
        if (!supabase) return;

        setClubHoFLoading(true);
        
        try {
            const [
                highestScoringWeeksRes,
                mostGwWinsRes,
                mostPerfect10sRes,
                mostCorrectResultsRes
            ] = await Promise.all([
                supabase.rpc("get_hof_club_highest_scoring_weeks"),
                supabase.rpc("get_hof_club_most_gw_wins"),
                supabase.rpc("get_hof_club_most_perfect10s"),
                supabase.rpc("get_hof_club_most_correct_results")
            ]);

            if (highestScoringWeeksRes.error) {
                throw highestScoringWeeksRes.error;
            }

            if (mostGwWinsRes.error) {
                throw mostGwWinsRes.error;
            }

            if (mostPerfect10sRes.error) {
                throw mostPerfect10sRes.error;
            }

            if (mostCorrectResultsRes.error) {
                throw mostCorrectResultsRes.error;
            }

            setClubHallOfFame({
                highestScoringWeeks:
                    highestScoringWeeksRes.data ?? [],

                mostGwWins:
                    mostGwWinsRes.data ?? [],

                mostPerfect10s:
                    mostPerfect10sRes.data ?? [],

                mostCorrectResults:
                    mostCorrectResultsRes.data ?? []
            });

            console.log("HIGHEST SCORING:", highestScoringWeeksRes);
            console.log("GW WINS:", mostGwWinsRes);
            console.log("PERFECT10S:", mostPerfect10sRes);
            console.log("RESULTS:", mostCorrectResultsRes);

        } catch (err) {
            console.error("HALL OF FAME FETCH ERROR:", err.message);

            setClubHallOfFame({
                highestScoringWeeks: [],
                mostGwWins: [],
                mostPerfect10s: [],
                mostCorrectResults: []
            });
        } finally {
            setClubHoFLoading(false);
        }
    }, [supabase]);

    useEffect(() => {
        refreshClubHallOfFame();
    }, [refreshClubHallOfFame]);



    return (
        <HoFClubContext.Provider
            value={{
                clubHallOfFame,
                clubHoFLoading,
                refreshClubHallOfFame
            }}
        >
            {children}
        </HoFClubContext.Provider>
    )
}