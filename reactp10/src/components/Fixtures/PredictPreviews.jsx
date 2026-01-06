import { usePredictionsClub } from "../../hooks/usePredictionsClub"
import PredictPreviewPill from "./PredictPreviewPill";

export default function PredictPreviews({ fixture_id, fixture_status, userPredictions }) {
    const { clubPredictions, clubLoading } = usePredictionsClub();

    if (clubLoading) return <p>Loading</p>;

    const filteredClubPredictions = clubPredictions.filter(
        pred => pred.fixture_id === fixture_id
    );

    const filteredUserPredictions = userPredictions.filter(
        pred => pred.fixture_id === fixture_id
    );

    const userPreviewsVisible = 
        fixture_status !== "upcoming" && filteredUserPredictions.length > 0;

    return (
        <div className="predictPreviewsContainer">
            <div className="clubPreviews">  
                {filteredClubPredictions.length > 0 && (
                    <PredictPreviewPill 
                        filteredPredictions={filteredClubPredictions}
                        subject={"club"}
                    />        
                )}          
            </div>
            
            <div className="previewInsights">
                {userPreviewsVisible && (
                    <PredictPreviewPill
                        filteredPredictions={filteredUserPredictions}
                        subject={"user"}
                    />
                )}
            </div>
        </div>
    )
}
