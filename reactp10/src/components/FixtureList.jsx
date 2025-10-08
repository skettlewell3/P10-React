import {useEffect, useState } from 'react';
import FixtureFieldset from './FixtureFieldset';

export default function FixtureList( {gameweek, mode} ) {
    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {
        fetch('/src/data/fixtureData.json')
        .then((res) => res.json())
        .then((data) => {
            setFixtures(data[gameweek] || [])
        })
        .catch((err) => console.log("Failed to load fixtures", err));
    }, [gameweek]);

    return (
    
        <form id="fixtures">
            {fixtures.map((fixture, idx) => (
                <FixtureFieldset
                    key={idx}
                    fixture={fixture}
                    mode={mode}
                />
            ))}
        
        </form>
    
    )
}

