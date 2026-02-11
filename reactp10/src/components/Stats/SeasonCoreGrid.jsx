import { StatBoxA } from "./StatBoxA";
import { StatBoxB } from "./StatBoxB";

export function SeasonCoreGrid({ stats }) {
    const avgPoints = stats.matches_predicted
        ? (stats.total_points / stats.matches_predicted).toFixed(1)
        : 0
    ;

    return (
        <div className="statsGrid">

            <StatBoxB 
                leftLabel="GW's Played"
                leftValue={stats.gws_played}
                rightLabel="GW's Won"
                rightValue={stats.gws_won}
            />

            <StatBoxB
                leftLabel="Matches"
                leftValue={stats.matches_predicted}
                rightLabel="Avg Points"
                rightValue={avgPoints}
            />

            <StatBoxA
                title="Perfect10s"
                value={stats.perfect10s}
                percent={stats.perfect10_accuracy}
            />

            <StatBoxA
                title="Results"
                value={stats.correct_results}
                percent={stats.results_accuracy}
            />

            <StatBoxA
                title="Goal Difference"
                value={stats.correct_gd}
                percent={stats.gd_accuracy}
            />

            <StatBoxA
                title="Goals"
                value={stats.correct_total_goals}
                percent={stats.total_goals_accuracy}
            />

            <StatBoxA
                title="Home"
                value={stats.correct_home}
                percent={stats.home_accuracy}
            />

            <StatBoxA
                title="Away"
                value={stats.correct_away}
                percent={stats.away_accuracy}
            />

            
        </div>
    )
}