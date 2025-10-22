import {useEffect, useState } from 'react';
import { supabase } from '../../supbaseClient';
import FixturesCard from './FixturesCard';
import FixtureFieldsetDB from './FixtureFieldsetDB';

export default function FixtureListDB( {gameweek, mode} ) {
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFixtures() {
            setLoading(true);

            const { data, error } = await supabase 
                .from('fixtures_with_results')
                .select('home_team, home_goals, away_goals, away_team, fixture_date')
                .eq('gameweek_id', gameweek)
                .order('fixture_date', {ascending: true})
                .order('home_team', {ascending:true});

            if (error) {
                console.error('Failed to load fixtures:', error);
            } else {
                setFixtures(data || []);
            }

            setLoading(false);
        }

        if (gameweek) fetchFixtures();
    }, [gameweek]);

    if (loading) return <p>Loading Fixtures</p>;

    if (mode === "form") {
        const groupedFixtures = fixtures.reduce((acc, fixture) => {
            const fixtureDate = new Date(fixture.fixture_date);
            const day = fixtureDate.toLocaleDateString();
            const ko = fixtureDate.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit'});
            const key = `${day}-${ko}`;
            if (!acc[key]) acc[key]= [];
            acc[key].push(fixture);
            return acc;
        }, {});
    
        return (        
            <form id="fixtures">
                {Object.entries(groupedFixtures).map(([key, fixtures]) => {
                    const [day, ko] = key.split("-");
                    return (
                        <FixturesCard
                            key={key}
                            day={day}
                            ko={ko}
                            fixtures={fixtures}
                            mode={mode}
                        />
                    );
                })}        
            </form>    
        );
    }

    return (
        <div id="fixtures">
            {fixtures.map((fixture) => (
                <FixtureFieldsetDB
                    key={fixture.fixture_id}
                    fixture={fixture}
                    mode={mode}
                />
            ))}
        </div>
    )

}

