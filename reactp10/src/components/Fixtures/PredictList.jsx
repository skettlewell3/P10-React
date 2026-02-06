import { useFixtures } from '../../hooks/useFixtures.js';
import FixturesCard from './FixturesCard';
import { useUser } from '../../hooks/useUser.js';
import { supabase } from '../../supbaseClient.js';
import { usePredictionsClub } from '../../hooks/usePredictionsClub.js';

export default function PredictList({ gameweek, currentGwStatus, subjectType, highlightedClub, refreshAll }) {
  const { user } = useUser();
  const { fixtures, loading } = useFixtures();
  const { clubPredictions } = usePredictionsClub();

  if (loading) return <p>Loading Fixtures...</p>;

  const filteredFixtures = fixtures.filter(f => f.gameweek_id === gameweek);

  const mode = currentGwStatus === "submissionsOpen" ? "form" : "result";

  const groupedFixtures = filteredFixtures.reduce((acc, fixture) => {
      const key = `${fixture.day}-${fixture.ko}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(fixture);
      return acc;
  }, {});

  // Submit handler that constructs payload and inserts into DB
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || loading) return;

    const form = document.getElementById("predictionForm");
    if (!form) {
      console.log("Form not found");
      return;
    }

    const formData = new FormData(form);

    for (const fixture of filteredFixtures) {
      if (formData.get(fixture.home_team) === '' || formData.get(fixture.away_team) ==='') {
        alert('Please fill in all predictions before submitting.');
        return;
      }
    }

    for (const fixture of filteredFixtures) {
      const { error } = await supabase
        .from('user_predictions')
        .upsert({
          user_id: user.user_id,
          fixture_id: fixture.fixture_id,
          pred_home_goals: Number(formData.get(fixture.home_team)),
          pred_away_goals: Number(formData.get(fixture.away_team)),
          updated_at: new Date().toISOString()
        }, { onConflict: ['user_id', 'fixture_id'] });

      if (error) console.error(error);
    }

    await refreshAll();

    alert('Predictions saved!');
  };

    

  return (
    <form id="predictionForm" onSubmit={handleSubmit}>
      {Object.entries(groupedFixtures).map(([key, fixtures]) => {
        const [day, ko] = key.split("-");
        return (
          <FixturesCard
            key={key}
            day={day}
            ko={ko}
            fixtures={fixtures}
            mode={mode}
            subjectType={subjectType}
            highlightedClub={highlightedClub}
            canToggle={clubPredictions.some(p =>
              fixtures.some(f => f.fixture_id === p.fixture_id)
            )}
          />
        );
      })}
    </form>
  );
}
