export const CURRENT_WEEK = 36;

export const categoryConfig = {
    highestScoringWeeks: {
        title: "Highest Scoring Week",
        primaryStat: data => data.total_points,
        primaryLabel: "PTS",
        secondaryStat: data => data.avg_gw_score,
        secondaryLabel: "AVG"
    },
    mostGwWins: {
        title: "Most GW Wins",
        primaryStat: data => data.gws_won,
        primaryLabel: "WINS",
        secondaryStat: data => data.gws_played,
        secondaryLabel: "ENTRIES"
    },
    mostPerfect10s: {
        title: "Most Perfect10s",
        primaryStat: data => data.perfect_10s,
        primaryLabel: "P10s",
        secondaryStat: data => data.correct_results,
        secondaryLabel: "RESULTS"
    },
    mostCorrectResults: {
        title: "Most Results",
        primaryStat: data => data.correct_results,
        primaryLabel: "RESULTS",
        secondaryStat: data => data.perfect_10s, 
        secondaryLabel: "P10s"
    }
};
