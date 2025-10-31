import { useFixtures } from '../../hooks/useFixtures';
import FixturesCard from './FixturesCard';
import FixtureFieldsetDB from './FixtureFieldsetDB';

export default function ReviewList({ gameweek, mode }) {
    const { fixtures, loading } = useFixtures();

    if (loading) return <p>Loading Fixtures...</p>;

    const filteredFixtures = fixtures.filter(f => f.gameweek_id === gameweek);

    if (mode === "form") {
        const groupedFixtures = filteredFixtures.reduce((acc, fixture) => {
            const key = `${fixture.day}-${fixture.ko}`;
            if (!acc[key]) acc[key] = [];
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
            {filteredFixtures.map(fixture => (
                <FixtureFieldsetDB
                    key={fixture.fixture_id}
                    fixture={fixture}
                    mode={mode}
                />
            ))}
        </div>
    );
}
