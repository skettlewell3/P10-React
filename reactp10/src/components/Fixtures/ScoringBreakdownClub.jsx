import { useScoringClub } from "../../hooks/useScoringClub";
import ScoringBreakdownHeader from "./ScoringBreakdownHeader";

export default function ScoringBreakdownClub({ fixture_id, selectedClub, activeSubject }) {
    const { clubScoring } = useScoringClub();

    const rows = clubScoring.filter(r => r.fixture_id === fixture_id);

    return (
        <>
        <ScoringBreakdownHeader
            activeSubject={activeSubject}
        />
        
        {rows.map(row => (
            <div
                key={row.club_prediction_id}
                className={` breakdownRow clubRow ${selectedClub === row.club_id ? "selected" : ""}`}
            >
                <div className="breakdownName">{row.club_name}</div>
                <div className="breakdownPred">
                    <span>{row.club_home_goals}</span>
                    <span>v</span>
                    <span>{row.club_away_goals}</span>
                </div>
                <div className="breakdownResults">{row.points_result}</div>
                <div className="breakdownGd">{row.points_gd}</div>
                <div className="breakdownHome">{row.points_home}</div>
                <div className="breakdownAway">{row.points_away}</div>
                <div className="breakdownGoals">{row.points_total_goals}</div>
                <div className="breakdownPoints">{row.total_points}</div>
            </div>
        ))}    
        </>
        
    )
}