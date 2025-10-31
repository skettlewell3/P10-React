import { useEffect, useState } from 'react';
import { supabase } from '../../supbaseClient';
import { FixtureContext } from '../../context/FixturesContext';

export function FixtureProvider({ children }) {
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFixtures() {
            const { data, error } = await supabase
            .from("fixture_provider")
            .select("*")

            if (error) {
                console.error("Failed to load fixtures:", error);
            } else {
                setFixtures(data || []);
            }
            setLoading(false);
        }

        fetchFixtures();
    }, []);

    return (
        <FixtureContext.Provider value={{ fixtures, loading }}>
            {children}
        </FixtureContext.Provider>
    );
}

