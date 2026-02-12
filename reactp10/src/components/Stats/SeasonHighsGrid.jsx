import { StatBoxA } from "./StatBoxA";

export function SeasonHighsGrid({ stats }) {
    return (
        <div className="statsGrid">

            <StatBoxA 
                title="Total Points" 
                value={stats.max_total_points} 
                gw={stats.max_total_points_gw} 
            />

            <StatBoxA 
                title="Best Rank" 
                value={stats.best_rank} 
                gw={stats.best_rank_gw}
            />
            
            <StatBoxA 
                title="Perfect10s" 
                value={stats.max_perfect10s} 
                gw={stats.perfect10s_gw} 
            />
            
            <StatBoxA 
                title="Results" 
                value={stats.max_correct_results} 
                gw={stats.results_gw} 
            />
            
            <StatBoxA 
                title="Home Goals" 
                value={stats.max_correct_home} 
                gw={stats.home_gw} 
            />
            
            <StatBoxA 
                title="Away Goals" 
                value={stats.max_correct_away} 
                gw={stats.away_gw} 
            />
            
            <StatBoxA 
                title="Goal Differences" 
                value={stats.max_correct_gd} 
                gw={stats.gd_gw} 
            />
            
            <StatBoxA 
                title="Total Goals" 
                value={stats.max_correct_total_goals} 
                gw={stats.total_goals_gw} 
            />
        </div>
    );
}
