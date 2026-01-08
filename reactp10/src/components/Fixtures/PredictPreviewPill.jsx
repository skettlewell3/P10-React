export default function PredictPreviewPill({ filteredPredictions, subject }) {
    return (
        <>
        {filteredPredictions.map((pred, index) => {
            const normalized = subject === "user"
                ? {
                    id: pred.user_id,
                    name: pred.user_name,
                    homeGoals: pred.pred_home_goals,
                    awayGoals: pred.pred_away_goals,
                    isPerfect10: false,
                    class: "userPreviewPill"
                }
                : {
                    id: pred.club_id,
                    name: pred.club_name,
                    homeGoals: pred.club_home_goals,
                    awayGoals: pred.club_away_goals,
                    isPerfect10: pred.club_name === "P10",
                    class: "clubPreviewPill"
                };

            // Determine colour
            let background;
            let text;

            if (normalized.isPerfect10) {
                background = "#FFF";
                text = "hsla(145, 52%, 26%, 1.00)";
            } else {
                // Generate shades for remaining pills
                const shade = 26 + index * 15;
                background = `hsl(145, 52%, ${shade}%)`;
                text = "#FFF";
            }



            return (
                <div
                    className={`pillPreview ${normalized.class}`}
                    key={normalized.id}
                    style={{ backgroundColor: background, color: text }}
                >
                    <div className="previewName">{normalized.name}</div>
                    <div className="previewPrediction">
                        <span className="homePreview">{normalized.homeGoals}</span>
                        <span className="previewV">v</span>
                        <span className="awayPreview">{normalized.awayGoals}</span>
                    </div>
                </div>
            );
        })}
        </>
    );
}
