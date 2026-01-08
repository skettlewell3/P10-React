import { usePredictionsClub } from "../../hooks/usePredictionsClub"
import PredictPreviewPill from "./PredictPreviewPill";

export default function PredictPreviews({ fixture_id, userPredictions, mode }) {
    const { clubPredictions, clubLoading } = usePredictionsClub();

    if (clubLoading) return <p>Loading</p>;

    const filteredClubPredictions = clubPredictions.filter(
        pred => pred.fixture_id === fixture_id
    );

    const filteredUserPredictions = userPredictions.filter(
        pred => pred.fixture_id === fixture_id
    );
    
    const userPreviewsVisible = mode !== "form";

    return (
        <div className="predictPreviewsContainer">
            <div className="clubPreviews previewContent">  
                {filteredClubPredictions.length > 0 && (
                    <PredictPreviewPill 
                        filteredPredictions={filteredClubPredictions}
                        subject={"club"}
                    />        
                )}          
            </div>
            
            <div className="previewInsights previewContent">
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
