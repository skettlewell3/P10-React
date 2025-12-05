import { usePredictionsClub } from "../../hooks/usePredictionsClub"

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
                {filteredPredictions.map(pred => (
                    <div className="clubPreview" key={pred.club_id}>
                    <div className="previewName">{pred.club_name}</div>
                    <div className="previewPrediction">
                        <span className="homePreview">{pred.club_home_goals}</span>
                        <span className="previewV">v</span>
                        <span className="awayPreview">{pred.club_away_goals}</span>
                    </div>
                </div>
                ))}
            </div>
            <div className="previewInsights">

            </div>
        </div>
    )
}