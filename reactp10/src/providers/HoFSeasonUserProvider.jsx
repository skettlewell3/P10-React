import { useState, useEffect, useCallback } from "react";
import { HoFUserSeasonContext } from "../context/HoFUserSeasonContext"
import { useDatabase } from "../hooks/useDatabase";

export function HoFSeasonUserProvider({ children }) {
    const { supabase } = useDatabase();

    const [hofSeasonUser, setHoFSeasonUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const refreshHoFSeasonUser = useCallback(async () => {
        if (!supabase) return;

        setLoading(true);

        const { data, error } = await supabase
            .rpc("get_season_user_hof");

        if (error) {
            console.error(error);
            setHoFSeasonUser([]);
        } else {
            setHoFSeasonUser(data || []);
        }

        setLoading(false);
    }, [supabase]);

    useEffect(() => {
        refreshHoFSeasonUser();
    }, [refreshHoFSeasonUser]);

    return (
        <HoFUserSeasonContext.Provider
            value={{
                hofSeasonUser,
                loading,
                refreshHoFSeasonUser
            }}
        >
            {children}
        </HoFUserSeasonContext.Provider>
    );
}