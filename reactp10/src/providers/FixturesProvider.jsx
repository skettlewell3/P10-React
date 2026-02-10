import { useEffect, useState, useCallback } from 'react';
import { FixtureContext } from '../context/FixturesContext';
import { useDatabase } from '../hooks/useDatabase';

export function FixturesProvider({ children }) {
    const { supabase } = useDatabase();
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(true);

    const refreshFixtures = useCallback(async () => {
        setLoading(true);
        const { data, error } = await supabase.rpc("get_fixtures");
        if (error) console.error('Failed to load fixtures:', error);
        else setFixtures(data || []);
        setLoading(false);
    }, [supabase]);   

    useEffect(() => {
        refreshFixtures();
    }, [refreshFixtures]);

    return (
        <FixtureContext.Provider value={{ fixtures, loading, refreshFixtures }}>
            {children}
        </FixtureContext.Provider>
    );
}


