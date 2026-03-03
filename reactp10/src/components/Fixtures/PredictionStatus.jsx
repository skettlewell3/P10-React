import { usePredictionsUser } from "../../hooks/usePredictionsUser";
import { useUser } from "../../hooks/useUser";
import { useGameweek } from "../../hooks/useGameweeks";

export default function PredictionStatus() {
    const { user } = useUser();
    const { currentWeek } = useGameweek();
    const { usePredictions, loading } =usePredictionsUser();

    if (loading || !user) return null;

    const gwPredictions = userPredictions.filter(
        p => p.gameweek === currentWeek && p.user_id === user.user_id
    );

    const hasPredictions = gwPredictions.length > 0;

    return (
        <div className="predictionStatus">
            <p>
                GW{currentWeek} Prediction Status: {" "}
                <span style={{ color: hasPredictions ? "green" : "red"}}>
                    {hasPredictions ? "Submitted" : "Not Submitted"}
                </span>
            </p>

            {hasPredictions && (
                <p>Thanks for Playing!</p>
            )}

        </div>
    )
}