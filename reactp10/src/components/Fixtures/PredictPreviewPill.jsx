export default function PredictPreviewPill({ filteredPredictions }) {
    return (
        <>
        {filteredPredictions.map((pred, index) => {
            // Determine colour
            let background;
            let text;

            if (pred.club_name === "Perfect10") {
                background = "#FFF";
                text = "hsla(145, 52%, 26%, 1.00)";
            } else {
                // Generate shades for remaining clubs
                const shade = 26 + index * 30;
                background = `hsl(145, 52%, ${shade}%)`;
                text = "#FFF";
            }

            return (
                <div
                    className="clubPreview"
                    key={pred.club_id}
                    style={{ backgroundColor: background, color: text }}
                >
                    <div className="previewName">{pred.club_name}</div>
                    <div className="previewPrediction">
                        <span className="homePreview">{pred.club_home_goals}</span>
                        <span className="previewV">v</span>
                        <span className="awayPreview">{pred.club_away_goals}</span>
                    </div>
                </div>
            );
        })}
        </>
    );
}
