import { useState, useEffect } from 'react';
import { useFixtures } from '../../hooks/useFixtures.js';
import FixturesCard from './FixturesCard';
import { useUser } from '../../hooks/useUser.js';
import { supabase } from '../../supbaseClient.js';
import { usePredictionsClub } from '../../hooks/usePredictionsClub.js';
import { usePredictionsUser } from '../../hooks/usePredictionsUser.js';
import MatchModal from '../MatchModal/MatchModal.jsx';

export default function PredictList({ 
  gameweek, 
  currentGwStatus, 
  subjectType, 
  highlightedClub, 
  refreshAll
}) {
  const { user } = useUser();
  const { fixtures, loading } = useFixtures();
  const { clubPredictions } = usePredictionsClub();
  const { userPredictions } = usePredictionsUser();

  const [modalFixture, setModalFixture] = useState(null);

  // CENTRAL STATE
  const [predictions, setPredictions] = useState({});

  // initialise from DB
  useEffect(() => {
    if (!user || !userPredictions) return;

    const initial = {};
    userPredictions
      .filter(p => p.user_id === user.user_id)
      .forEach(p => {
      initial[p.fixture_id] = {
        home: p.pred_home_goals ?? '',
        away: p.pred_away_goals ?? ''
      };
    });

    setPredictions(initial);
  }, [userPredictions, user]);

  if (loading) return <p>Loading Fixtures...</p>;

  const filteredFixtures = fixtures.filter(f => f.gameweek_id === gameweek);
  const mode = currentGwStatus === "submissionsOpen" ? "form" : "result";

  const groupedFixtures = filteredFixtures.reduce((acc, fixture) => {
    const key = `${fixture.day}-${fixture.ko}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(fixture);
    return acc;
  }, {});

  // UPDATED SUBMIT (no FormData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    for (const fixture of filteredFixtures) {
      const pred = predictions[fixture.fixture_id];

      if (!pred || pred.home === '' || pred.away === '') {
        alert('Please fill in all predictions before submitting.');
        return;
      }
    }

    for (const fixture of filteredFixtures) {
      const pred = predictions[fixture.fixture_id];

      const { error } = await supabase
        .from('user_predictions')
        .upsert({
          user_id: user.user_id,
          fixture_id: fixture.fixture_id,
          pred_home_goals: Number(pred.home),
          pred_away_goals: Number(pred.away),
          updated_at: new Date().toISOString()
        }, { onConflict: ['user_id', 'fixture_id'] });

      if (error) console.error(error);
    }

    await refreshAll();
    alert('Predictions saved!');
  };

  return (
    <>
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
              openMatchModal={setModalFixture}
              predictions={predictions}
              setPredictions={setPredictions}
            />
          );
        })}
      </form>

      {modalFixture && (
        <MatchModal
          fixture={modalFixture}
          filteredFixtures={filteredFixtures} 
          fixtures={fixtures}
          mode={mode}
          subjectType={subjectType}
          onClose={() => setModalFixture(null)}
          predictions={predictions}
          setPredictions={setPredictions}
        />
      )}
    </>
  );
}