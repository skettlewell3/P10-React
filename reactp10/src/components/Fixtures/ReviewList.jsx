import { useState } from 'react';
import { useFixtures } from '../../hooks/useFixtures';
import FixtureFieldsetDB from './FixtureFieldsetDB';
import ScoringBreakdownContainer from './ScoringBreakdownContainer';
import MatchModal from '../MatchModal/MatchModal';

export default function ReviewList({ 
    gameweek, 
    subjectType, 
    highlightedClub
}) {
    const { fixtures, loading } = useFixtures();
    const [modalFixture, setModalFixture] = useState(null);

    if (loading) return <p>Loading Fixtures...</p>;

    const filteredFixtures = fixtures.filter(f => f.gameweek_id === gameweek);

    return (
        <>
            <div id="fixtures">
                {filteredFixtures.map(fixture => (
                    <FixtureFieldsetDB
                        key={fixture.fixture_id}
                        fixture={fixture}
                        mode='result'
                        toggledContent={
                            <ScoringBreakdownContainer 
                                subjectType={subjectType}
                                highlightedClub={highlightedClub}
                            />}
                        canToggle={true}
                        highlightedClub={highlightedClub}
                        openMatchModal={setModalFixture}
                    />
                ))}
            </div>

            {modalFixture && (
                <MatchModal
                  fixture={modalFixture}
                  fixtures={fixtures} 
                  filteredFixtures={filteredFixtures}
                  subjectType={subjectType}
                  onClose={() => setModalFixture(null)}
                />
            )}
        </>
    );
}
