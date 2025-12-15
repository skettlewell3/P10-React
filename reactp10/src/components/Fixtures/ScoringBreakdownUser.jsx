import { useScoringUser } from "../../hooks/useScoringUser";
import ScoringBreakdownHeader from "./ScoringBreakdownHeader";

export default function ScoringBreakdownUser({ fixture_id, club_id, activeSubject }) {
    const { userScoring } = useScoringUser();

    const rows = userScoring.filter(r => 
        r.fixture_id === fixture_id && r.club_id === club_id
    );

    return (
        <>
        <ScoringBreakdownHeader
            activeSubject={activeSubject}
        />

        {rows.map(row => (
            <div 
                key={row.prediction_id} 
                className=" breakdownRow userRow"
            >
                <div>{row.user_name}</div>
                <div>
                    <span>{row.pred_home_goals}</span>
                    <span>v</span>
                    <span>{row.pred_away_goals}</span>
                </div>
                <div>{row.points_result}</div>
                <div>{row.points_gd}</div>
                <div>{row.points_home}</div>
                <div>{row.points_away}</div>
                <div>{row.points_total_goals}</div>
                <div>{row.total_points}</div>
            </div>
        ))}
        </>
    )
}