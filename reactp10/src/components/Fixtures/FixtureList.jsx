import {useEffect, useState } from 'react';
import FixturesCard from './FixturesCard';
import FixtureFieldset from './FixtureFieldset';

export default function FixtureList( {gameweek, mode} ) {
    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {
        fetch('/data/fixtureData.json')
        .then((res) => res.json())
        .then((data) => {
            setFixtures(data[gameweek] || [])
        })
        .catch((err) => console.log("Failed to load fixtures", err));
    }, [gameweek]);

    if (mode === "form") {
        const groupedFixtures = fixtures.reduce((acc, fixture) => {
            const key = `${fixture.day}-${fixture.ko}`;
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
            {fixtures.map((fixture, idx) => (
                <FixtureFieldset
                    key={idx}
                    fixture={fixture}
                    mode={mode}
                />
            ))}
        </div>
    )

}

