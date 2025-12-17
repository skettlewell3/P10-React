import { useGameweek } from "../hooks/useGameweeks";
import { useState, useEffect } from 'react'

export default function StateBootstrapper({children}) {
    const { currentWeek, currentGwStatus, isLoading } = useGameweek();
    const [ activeWeek, setActiveWeek] = useState(null)

    useEffect(() => {
        if (isLoading) return;

        if (activeWeek !== null) return;

        if (currentWeek === null) return;

        const initial = 
            currentGwStatus === 'submissionsOpen'
                ? currentWeek -1
                : currentWeek;
                setActiveWeek(initial);

    }, [isLoading, currentWeek, activeWeek, currentGwStatus]);

    if (isLoading || activeWeek === null ) {
        return <div className="loader">loading app...</div>
    }

    return children({activeWeek, setActiveWeek, currentGwStatus});
}