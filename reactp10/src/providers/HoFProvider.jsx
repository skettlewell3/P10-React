import { useState, useEffect, useCallback } from "react";
import { HoFContext } from "../context/HoFContext";
import { useDatabase } from "../hooks/useDatabase";

export function HoFProvider({ children }) {
    const { supabase } = useDatabase();

    const [hallOfFame, setHallOfFame] = useState({
        highestScoringWeeks: [],
        mostGwWins: [],
        mostPerfect10s: [],
        mostCorrectResults: []
    });

    const [hoFLoading, setHoFLoading] = useState(true);

    const refreshHallOfFame = useCallback(async () => {
        if (!supabase) return;

        setHoFLoading(true);
        
        try {
            const [
                highestScoringWeeksRes,
                mostGwWinsRes,
                mostPerfect10sRes,
                mostCorrectResultsRes
            ] = await Promise.all([
                supabase.rpc("get_hof_highest_scoring_weeks"),
                supabase.rpc("get_hof_most_gw_wins"),
                supabase.rpc("get_hof_most_perfect10s"),
                supabase.rpc("get_hof_most_correct_results")
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

            setHallOfFame({
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

            setHallOfFame({
                highestScoringWeeks: [],
                mostGwWins: [],
                mostPerfect10s: [],
                mostCorrectResults: []
            });
        } finally {
            setHoFLoading(false);
        }
    }, [supabase]);

    useEffect(() => {
        refreshHallOfFame();
    }, [refreshHallOfFame]);



    return (
        <HoFContext.Provider
            value={{
                hallOfFame,
                hoFLoading,
                refreshHallOfFame
            }}
        >
            {children}
        </HoFContext.Provider>
    )
}