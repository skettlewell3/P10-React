import { useState, useEffect, useCallback } from 'react'
import { GameweekContext } from '../context/GameweekContext'
import { supabase } from '../supbaseClient'

export function GameweekProvider({children}) {
    const [currentWeek, setCurrentWeek] = useState(null);
    const [currentGwStatus, setCurrentGwStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const refreshGameweek = useCallback(async () => {
        setIsLoading(true);

        const { data, error } = await supabase.rpc("get_current_gameweek")

        if (error) {
            console.error("Failed to fetch current Gameweek", error);
        } else if (data && data.length > 0) {
            setCurrentWeek(data[0].gameweek_number);
            setCurrentGwStatus(data[0].status);
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        refreshGameweek();
    }, [refreshGameweek]);

    return (
        <GameweekContext.Provider
            value={{
                currentWeek,
                currentGwStatus,
                isLoading,
                refreshGameweek,
            }}
        >
            {children}
        </GameweekContext.Provider>
    );
}