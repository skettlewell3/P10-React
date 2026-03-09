import { usePredictionsUser } from "../../hooks/usePredictionsUser";
import { useUser } from "../../hooks/useUser";
import { useGameweek } from "../../hooks/useGameweeks";

export default function PredictionStatus() {
    const { user } = useUser();
    const { currentWeek } = useGameweek();
    const { userPredictions, loading } =usePredictionsUser();

    if (loading || !user) return null;

    const minFixtureId = currentWeek * 10 - 9;
    const maxFixtureId = currentWeek * 10;

    const gwPredictions = userPredictions.filter(p =>
      p.user_id === user.user_id &&
      p.fixture_id >= minFixtureId &&
      p.fixture_id <= maxFixtureId
    );

    const hasPredictions = gwPredictions.length > 0;
    console.log("predictions:", gwPredictions);

    return (
        <div >
            <div className="predictionStatus">
                <span 
                    className="dot" 
                    style={{ backgroundColor: hasPredictions ? "green" : "red"}}
                />
                GW{currentWeek} Prediction Status: {" "}
                <span style={{ color: hasPredictions ? "green" : "red"}}>
                    {hasPredictions ? "Submitted" : "Not Submitted"}                    
                </span>
            </div>

            {hasPredictions && (
                <p className="thanks">Thanks for Playing!</p>
            )}

        </div>
    )
}