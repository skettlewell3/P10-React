import { useState, useEffect, useCallback } from 'react'
import { GameweekContext } from '../context/GameweekContext'
import { supabase } from '../supbaseClient'

export function GameweekProvider({children}) {
    const [currentWeek, setCurrentWeek] = useState(null);
    const [currentGwStatus, setCurrentGwStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchGameweek = useCallback(async () => {
        setIsLoading(true);

        const { data, error } = await supabase
            .from("gameweeks")
            .select("*")
            .in("status", ["submissionsOpen", "live"])
            .order("gameweek_number", {ascending: true})
            .limit(1)
            .single();

        if (error) {
            console.error("Failed to fetch current Gameweek", error);
        } else {
            setCurrentWeek(data.gameweek_number);
            setCurrentGwStatus(data.status);
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchGameweek();
    }, [fetchGameweek]);

    return (
        <GameweekContext.Provider
            value={{
                currentWeek,
                currentGwStatus,
                isLoading,
                refresh: fetchGameweek,
            }}
        >
            {children}
        </GameweekContext.Provider>
    );
}