import { useFixtures } from '../../hooks/useFixtures.js';
import FixturesCard from './FixturesCard';
import FixtureFieldsetDB from './FixtureFieldsetDB.jsx';
import { useUser } from '../../hooks/useUser.js';
import { supabase } from '../../supbaseClient.js';

export default function PredictList({ gameweek, mode }) {
  const { user } = useUser();
  const { fixtures, loading } = useFixtures();

  if (loading) return <p>Loading Fixtures...</p>;

  const filteredFixtures = fixtures.filter(f => f.gameweek_id === gameweek);

  // Submit handler that constructs payload and inserts into DB
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    const form = e.target;
    const formData = new FormData(form);

    const payload = filteredFixtures.map(fixture => ({
      user_id: user.id,
      fixture_id: fixture.fixture_id,
      pred_home_goals: parseInt(formData.get(fixture.home_team)) || 0,
      pred_away_goals: parseInt(formData.get(fixture.away_team)) || 0
    }));

    const { error } = await supabase
      .from('user_predictions')
      .upsert(payload, { onConflict: ['user_id', 'fixture_id'] });

    if (error) console.error(error);
    else alert('Predictions saved!');
  };

  if (mode === "form") {
    const groupedFixtures = filteredFixtures.reduce((acc, fixture) => {
      const key = `${fixture.day}-${fixture.ko}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(fixture);
      return acc;
    }, {});

    return (
      <form id="fixtures" onSubmit={handleSubmit}>
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
