import { useEffect } from "react";
import FixtureFieldsetDB from "../Fixtures/FixtureFieldsetDB";
import { useSearchAnyPredictionsWeek } from "../../hooks/useSearchAnyPredictionsWeek";

export default function PredictionContent({ subjectId, subjectType, gameweek }) {
  const { predictions, loading, fetchPredictions } = useSearchAnyPredictionsWeek({
    subjectId,
    subjectType,
    gameweek
  });

  // Only fetch if predictions are undefined (never fetched)
  useEffect(() => {
    if (!subjectId || !gameweek) return;

    if (predictions === undefined) {
      fetchPredictions();
    }
  }, [subjectId, gameweek, predictions, fetchPredictions]);

  // Debugging
  console.log("Predictions:", predictions, "Loading:", loading, "subjectId:", subjectId, "gameweek:", gameweek);

  if (loading || predictions === undefined) return <p>Loading predictions...</p>;
  if (predictions.length === 0) return <p>No predictions available</p>;

  return (
    <div id="modalFixtures">
        <div className="statsSectionTitle text-center">{`GW${gameweek} PREDICTIONS`}</div>
      {predictions.map((prediction) => (
        <FixtureFieldsetDB
          key={prediction.fixture_id}
          fixture={prediction}
          mode="result"
          toggledContent={null}
          canToggle={false}
        />
      ))}
    </div>
  );
}