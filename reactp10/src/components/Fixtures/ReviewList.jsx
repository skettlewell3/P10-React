import { useFixtures } from '../../hooks/useFixtures';
import FixtureFieldsetDB from './FixtureFieldsetDB';
import ScoringBreakdownContainer from './ScoringBreakdownContainer';

export default function ReviewList({ gameweek, subjectType}) {
    const { fixtures, loading } = useFixtures();

    if (loading) return <p>Loading Fixtures...</p>;

    const filteredFixtures = fixtures.filter(f => f.gameweek_id === gameweek);

    return (
        <div id="fixtures">
            {filteredFixtures.map(fixture => (
                <FixtureFieldsetDB
                    key={fixture.fixture_id}
                    fixture={fixture}
                    mode='result'
                    toggledContent={
                        <ScoringBreakdownContainer 
                            subjectType={subjectType}
                        />}
                />
            ))}
        </div>
    );
}
