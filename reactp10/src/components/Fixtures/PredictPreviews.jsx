import { usePredictionsClub } from "../../hooks/usePredictionsClub"
import PredictPreviewPill from "./PredictPreviewPill";

export default function PredictPreviews({ fixture_id }) {
    const { clubPredictions, loading } = usePredictionsClub();

    if (loading) return <p>Loading</p>;

    const filteredPredictions = clubPredictions.filter(
        pred => pred.fixture_id === fixture_id
    );

    if (!filteredPredictions.length) return null;

    return (
        <div className="predictPreviewsContainer">
            <div className="clubPreviews">            
                <PredictPreviewPill 
                    filteredPredictions={filteredPredictions}
                />            
            </div>
            <div className="previewInsights">

            </div>
        </div>
    )
}