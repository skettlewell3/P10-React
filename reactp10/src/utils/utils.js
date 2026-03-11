export function classifyTeamName(name) {
    return name.toLowerCase().replace(/[\s'.]/g, '');
}

export function summariseGenericComparison(data) {
  const safe = v => v ?? 0;

  const summary = data.reduce((acc, row) => {

    if (row.t1_home_gf != null) acc.t1.home.played++;
    if (row.t1_away_gf != null) acc.t1.away.played++;
    if (row.t2_home_gf != null) acc.t2.home.played++;
    if (row.t2_away_gf != null) acc.t2.away.played++;

    acc.t1.home.gf += safe(row.t1_home_gf);
    acc.t1.home.ga += safe(row.t1_home_ga);
    acc.t1.home.pts += safe(row.t1_home_pts);

    acc.t1.away.gf += safe(row.t1_away_gf);
    acc.t1.away.ga += safe(row.t1_away_ga);
    acc.t1.away.pts += safe(row.t1_away_pts);

    acc.t2.home.gf += safe(row.t2_home_gf);
    acc.t2.home.ga += safe(row.t2_home_ga);
    acc.t2.home.pts += safe(row.t2_home_pts);

    acc.t2.away.gf += safe(row.t2_away_gf);
    acc.t2.away.ga += safe(row.t2_away_ga);
    acc.t2.away.pts += safe(row.t2_away_pts);

    return acc;

  }, {
    t1: { home: { gf:0, ga:0, pts:0, played:0 }, away: { gf:0, ga:0, pts:0, played:0 } },
    t2: { home: { gf:0, ga:0, pts:0, played:0 }, away: { gf:0, ga:0, pts:0, played:0 } }
  });

  // combined totals
  ["t1","t2"].forEach(team => {
    summary[team].total = {
      gf: summary[team].home.gf + summary[team].away.gf,
      ga: summary[team].home.ga + summary[team].away.ga,
      pts: summary[team].home.pts + summary[team].away.pts,
      played: summary[team].home.played + summary[team].away.played
    };
  });

  return summary;
}

export function summariseDirectComparison(data) {
  const safe = v => v ?? 0;

  const summary = {
    t1: { home: { gf: 0, ga: 0, swing: 0, played: 0 }, away: { gf: 0, ga: 0, swing: 0, played: 0 }, total: {} },
    t2: { home: { gf: 0, ga: 0, swing: 0, played: 0 }, away: { gf: 0, ga: 0, swing: 0, played: 0 }, total: {} }
  };

  data.forEach(row => {

    // T1 home vs T2 away pair
    if (row.t1_home_swing != null) {
      summary.t1.home.gf += safe(row.t1_home_gf);
      summary.t1.home.ga += safe(row.t1_home_ga);
      summary.t1.home.swing += safe(row.t1_home_swing);
      summary.t1.home.played++;

      summary.t2.away.gf += safe(row.t2_away_gf);
      summary.t2.away.ga += safe(row.t2_away_ga);
      summary.t2.away.swing += safe(row.t2_away_swing);
      summary.t2.away.played++;
    }

    // T1 away vs T2 home pair
    if (row.t1_away_swing != null) {
      summary.t1.away.gf += safe(row.t1_away_gf);
      summary.t1.away.ga += safe(row.t1_away_ga);
      summary.t1.away.swing += safe(row.t1_away_swing);
      summary.t1.away.played++;

      summary.t2.home.gf += safe(row.t2_home_gf);
      summary.t2.home.ga += safe(row.t2_home_ga);
      summary.t2.home.swing += safe(row.t2_home_swing);
      summary.t2.home.played++;
    }

  });

  // totals
  ["t1","t2"].forEach(team => {
    summary[team].total = {
      gf: summary[team].home.gf + summary[team].away.gf,
      ga: summary[team].home.ga + summary[team].away.ga,
      swing: summary[team].home.swing + summary[team].away.swing,
      played: summary[team].home.played + summary[team].away.played
    };
  });

  return summary;
}