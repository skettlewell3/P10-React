export const ruleSections = [
  {
    id: "objective",
    title: "Objective",
    icon: "🎯",
    items: [
      "Test your football prediction ability across each GameWeek",
      "Score points based on how accurately you predict match outcomes",
      "Compete against the system’s aggregated Perfect10 benchmark and other players",
      "Join or create a club to compete alongside other players",
    ],
  },
  {
    id: "clubs",
    title: "Clubs",
    icon: "👥",
    items: [
      "Clubs includes leaderboards for individual performance of its members",
      "Club performance is based on aggregated predictions from all members",
      "This aggregation forms a single club prediction scoreline for each fixture",
      "Clubs compete against other clubs and Perfect10",
    ],
  },
  {
    id: "predictions",
    title: "Predictions",
    icon: "⚽",
    items: [
      "All fixtures in a GameWeek must be predicted",
      "Predictions must be whole numbers (0–9 goals per team)",
      "Predictions can be adjusted feely until the deadline",
    ],
  },
  {
    id: "deadlines",
    title: "Deadlines",
    icon: "⏱",
    items: [
      "Deadline is 30 minutes before the first kickoff of each GameWeek",
      "No changes allowed after the deadline",
    ],
  },
  {
    id: "scoring",
    title: "Scoring",
    icon: "🧮",
    items: [
      "Points are awarded based on prediction accuracy",
      "Includes; Result, Goal Difference, Home, Away and Total Goals",
      "A correct prediction results in 10 points (a Perfect10)",
      "See scoring table below for full breakdown",
    ],
    hasTable: true, 
    breakdown: [
      "Result (R): Correct Win, Draw or Loss",
      "Goal Difference (GD): Correct Goal Difference, including match result e.g Home win by 2",
      "Home (H): Correct Home scoreline",
      "Away (A): Correct Away scoreline",
      "Total Goals (G): Correct number of goals across both teams",
    ]
  },
  {
    id: "leaderboards",
    title: "Leaderboards",
    icon: "🏆",
    items: [
      "Leaderboards update in real time as fixtures are played",
      "Separate leaderboards exist for individual players and clubs",
      "Rankings are displayed across both weekly and overall competitions",
    ],
    tiebreakers: [
      "Total Points",
      "Perfect10s",
      "Correct Results",
      "Tie"
    ]
  },
  {
    id: "fairPlay",
    title: "Fair Play",
    icon: "🟥",
    items: [
      "No exploiting bugs or unintended behaviour",
      "Violations may result in score adjustments or removal",
    ],
  },
  {
    id: "beta",
    title: "Beta",
    icon: "⚠️",
    items: [
      "This is a beta version of the app",
      "Features and rules may change",
      "Feedback may be used to improve gameplay",
    ],
  },
];