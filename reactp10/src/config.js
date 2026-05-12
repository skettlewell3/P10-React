export const CURRENT_WEEK = 36;

export const categoryConfig = {
    highestScoringWeeks: {
        title: "Highest Scoring Week",
        primaryStat: data => data.total_points,
        primaryLabel: "PTS",
        secondaryStat: data => data.avg_gw_score,
        secondaryLabel: "AVG",
        src: "/assets/svg/HoFPoints.svg",
        alt: "Star svg"
    },
    mostGwWins: {
        title: "Most GW Wins",
        primaryStat: data => data.gws_won,
        primaryLabel: "WINS",
        secondaryStat: data => data.gws_played,
        secondaryLabel: "ENTRIES",
        src: "/assets/svg/HoFWins.svg",
        alt: "Trophy svg"
    },
    mostPerfect10s: {
        title: "Most Perfect10s",
        primaryStat: data => data.perfect_10s,
        primaryLabel: "P10s",
        secondaryStat: data => data.correct_results,
        secondaryLabel: "RESULTS",
        src: "/assets/svg/HoF10s.svg",
        alt: "Dartboard svg"
    },
    mostCorrectResults: {
        title: "Most Results",
        primaryStat: data => data.correct_results,
        primaryLabel: "RESULTS",
        secondaryStat: data => data.perfect_10s, 
        secondaryLabel: "P10s",
        src: "/assets/svg/HoFResults.svg",
        alt: "Podium svg"
    }
};
