import { useState, useEffect, useCallback } from "react";
import { HoFSeasonClubContext } from "../context/HoFSeasonClubContext";
import { useDatabase } from "../hooks/useDatabase";

export function HoFSeasonClubProvider({ children }) {
    const { supabase } = useDatabase();

    const [hofSeasonClub, setHoFSeasonClub] = useState([]);
    const [loading, setLoading] = useState(true);

    const refreshHoFSeasonClub = useCallback(async () => {
        if (!supabase) return;

        setLoading(true);

        const { data, error } = await supabase
            .rpc("get_season_club_hof");

        if (error) {
            console.error("HoF season club error:", error);
            setHoFSeasonClub([]);
        } else {
            setHoFSeasonClub(data || []);
        }

        setLoading(false);
    }, [supabase]);

    useEffect(() => {
        refreshHoFSeasonClub();
    }, [refreshHoFSeasonClub]);

    return (
        <HoFSeasonClubContext.Provider
            value={{
                hofSeasonClub,
                loading,
                refreshHoFSeasonClub
            }}
        >
            {children}
        </HoFSeasonClubContext.Provider>
    );
}