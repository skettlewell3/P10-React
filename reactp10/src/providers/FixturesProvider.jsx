import { useEffect, useState } from 'react';
import { FixtureContext } from '../context/FixturesContext';
import { useDatabase } from '../hooks/useDatabase';

export function FixturesProvider({ children }) {
    const { supabase } = useDatabase();
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFixtures() {
            setLoading(true);
            const { data, error } = await supabase.rpc("get_fixtures")
            if (error) {
                console.error('Failed to load fixtures:', error);
            } else {
                setFixtures(data || []);
            } 
            
            setLoading(false);
        }

        fetchFixtures();

        const interval = setInterval(fetchFixtures, 1000 * 60 * 60 * 24);
        return () => clearInterval(interval);
    }, [supabase]);

    return (
        <FixtureContext.Provider value={{ fixtures, loading }}>
            {children}
        </FixtureContext.Provider>
    );
}


