import FixtureCell from "./FixtureCell";
import { classifyTeamName } from "../../utils/utils";


export default function TeamComparisonRow({ rowData, viewMode }) {
    const {
        opponent_name, opponent_short,
        t1_home_gf, t1_home_ga, t1_home_pts, t1_home_swing,
        t1_away_gf, t1_away_ga, t1_away_pts, t1_away_swing,
        t2_home_gf, t2_home_ga, t2_home_pts, t2_home_swing,
        t2_away_gf, t2_away_ga, t2_away_pts, t2_away_swing,
    } = rowData

    const t1_homeMeta = viewMode === "generic" ? t1_home_pts : t1_home_swing;
    const t1_awayMeta = viewMode === "generic" ? t1_away_pts : t1_away_swing;
    const t2_homeMeta = viewMode === "generic" ? t2_home_pts : t2_home_swing;
    const t2_awayMeta = viewMode === "generic" ? t2_away_pts : t2_away_swing;

    const t1_total = (t1_homeMeta || 0) + (t1_awayMeta || 0);
    const t2_total = (t2_homeMeta || 0) + (t2_awayMeta || 0);

    const t1Style = {
        backgroundColor: t1_total > t2_total 
        ? "green" 
        : t1_total < t2_total 
        ? "red" : "orange",
    };

    const t2Style = {
        backgroundColor: t2_total > t1_total 
        ? "green" 
        : t2_total < t1_total 
        ? "red" : "orange",        
    };

    return (
        <div className="teamComparisonRow">
            <div className="comparisonRowTotal t1" style={t1Style}>{t1_total}</div>
            <FixtureCell 
                hGoals={t1_home_gf} 
                aGoals={t1_home_ga} 
                metaData={t1_homeMeta}
                className="t1Home"
            />
            <FixtureCell 
                hGoals={t1_away_gf} 
                aGoals={t1_away_ga} 
                metaData={t1_awayMeta}
                className="t1Away"
            />            

            <div className={`comparisonRowOppo ${classifyTeamName(opponent_name)}`}>{opponent_short}</div>

            <FixtureCell 
                hGoals={t2_home_gf} 
                aGoals={t2_home_ga} 
                metaData={t2_homeMeta}
                className="t2Home"
            />
            <FixtureCell 
                hGoals={t2_away_gf} 
                aGoals={t2_away_ga} 
                metaData={t2_awayMeta}
                className="t2Away"
            />   
            <div className="comparisonRowTotal" style={t2Style}>{t2_total}</div>
        </div>
    )
}