import { useScoringClub } from "../../hooks/useScoringClub";
import ScoringBreakdownHeader from "./ScoringBreakdownHeader";

export default function ScoringBreakdownClub({ fixture_id, selectedClub, onSelectClub, activeTab }) {
    const { clubScoring } = useScoringClub();

    const rows = clubScoring.filter(r => r.fixture_id === fixture_id);

    return (
        <>
        <ScoringBreakdownHeader
            activeTab={activeTab}
        />
        
        {rows.map(row => (
            <div
                key={row.club_prediction_id}
                className={` breakdownRow clubRow ${selectedClub === row.club_id ? "selected" : ""}`}
                onClick={() => onSelectClub(row.club_id)}
            >
                <div>{row.club_name}</div>
                <div>
                    <span>{row.club_home_goals}</span>
                    <span>v</span>
                    <span>{row.club_away_goals}</span>
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