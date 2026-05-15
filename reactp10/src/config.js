export const CURRENT_WEEK = 36;

export const categoryConfig = {
    highestScoringWeeks: {
        title: "High Scores",
        primaryStat: data => data.total_points,
        primaryLabel: "PTS",
        secondaryStat: data => data.avg_gw_score,
        secondaryLabel: "AVG",
        src: "/assets/svg/HoFPoints.svg",
        alt: "HighScore svg"
    },
    mostGwWins: {
        title: "Most Wins",
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
        alt: "PErfect10s svg"
    },
    mostCorrectResults: {
        title: "Most Results",
        primaryStat: data => data.correct_results,
        primaryLabel: "RESULTS",
        secondaryStat: data => data.perfect_10s, 
        secondaryLabel: "P10s",
        src: "/assets/svg/HoFResults.svg",
        alt: "Results svg"
    },
    seasonPerfect10s: {
        title: "Most Perfect10s",
        primaryStat: data => data.perfect_10s,
        primaryLabel: "P10s",
        secondaryStat: data => data.perfect_10s_accuracy,
        secondaryLabel: "%",
        src: "/assets/svg/HoF10s.svg",
        alt: "PErfect10s svg"
    },
    seasonCorrectResults: {
        title: "Most Results",
        primaryStat: data => data.correct_results,
        primaryLabel: "RES",
        secondaryStat: data => data.result_accuracy, 
        secondaryLabel: "%",
        src: "/assets/svg/HoFResults.svg",
        alt: "Results svg"
    },
    seasonCorrectHome: {
        title: "Home Goals",
        primaryStat: data => data.correct_home_goals,
        primaryLabel: "H",
        secondaryStat: data => data.home_accuracy, 
        secondaryLabel: "%",
        src: "/assets/svg/HoFHome.svg",
        alt: "Home svg"
    },
    seasonCorrectAway: {
        title: "Away Goals",
        primaryStat: data => data.correct_away_goals,
        primaryLabel: "A",
        secondaryStat: data => data.away_accuracy, 
        secondaryLabel: "%",
        src: "/assets/svg/HoFAway.svg",
        alt: "AWay svg"
    },
    seasonCorrectGD: {
        title: "Goal Difference",
        primaryStat: data => data.correct_goal_differences,
        primaryLabel: "GD",
        secondaryStat: data => data.gd_accuracy, 
        secondaryLabel: "%",
        src: "/assets/svg/HoFGD.svg",
        alt: "GD svg"
    },
    seasonCorrectGoals: {
        title: "Total Goals",
        primaryStat: data => data.correct_total_goals,
        primaryLabel: "Goals",
        secondaryStat: data => data.goals_accuracy, 
        secondaryLabel: "%",
        src: "/assets/svg/HoFGoals.svg",
        alt: "Goals svg"
    }
};

export const seasonMetaConfig = {
  seasonPerfect10s: {
    line1: [
      { label: "BEST", field: "max_perfect_10s" },
      { label: "GW", field: "gw_perfect_10s" }
    ],
    line2: [
      { 
        label: "AVG", 
        field: "avg_perfect_10s", 
        format: value => `${Number(value).toFixed(2)}`
      },
      { label: "TOTAL", field: "total_points" }
    ]
  },

  seasonCorrectResults: {
    line1: [
      { label: "BEST", field: "max_results" },
      { label: "GW", field: "gw_results" }
    ],
    line2: [
      { 
        label: "AVG", 
        field: "avg_results", 
        format: value => `${Number(value).toFixed(2)}`
      },
      { label: "TOTAL", field: "total_points" }
    ]
  },

  seasonCorrectHome: {
    line1: [
      { label: "BEST", field: "max_home" },
      { label: "GW", field: "gw_home" }
    ],
    line2: [
      { 
        label: "AVG", 
        field: "avg_home", 
        format: value => `${Number(value).toFixed(2)}`
      },
      { label: "TOTAL", field: "total_points" }
    ]
  },

  seasonCorrectAway: {
    line1: [
      { label: "BEST", field: "max_away" },
      { label: "GW", field: "gw_away" }
    ],
    line2: [
      { 
        label: "AVG", 
        field: "avg_away", 
        format: value => `${Number(value).toFixed(2)}`
      },
      { label: "TOTAL", field: "total_points" }
    ]
  },

  seasonCorrectGD: {
    line1: [
      { label: "BEST", field: "max_gd" },
      { label: "GW", field: "gw_gd" }
    ],
    line2: [
      { 
        label: "AVG", 
        field: "avg_gd", 
        format: value => `${Number(value).toFixed(2)}`
      },
      { label: "TOTAL", field: "total_points" }
    ]
  },

  seasonCorrectGoals: {
    line1: [
      { label: "BEST", field: "max_goals" },
      { label: "GW", field: "gw_goals" }
    ],
    line2: [
      { 
        label: "AVG",
        field: "avg_goals", 
        format: value => `${Number(value).toFixed(2)}`
      },
      { label: "TOTAL", field: "total_points" }
    ]
  }
};