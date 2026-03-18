export function classifyTeamName(name) {
    return name.toLowerCase().replace(/[\s'.]/g, '');
}

export function summariseGenericComparison(data) {

  const safe = v => v ?? 0;

  const summary = data.reduce((acc, row) => {

    const addResult = (obj, pts) => {
      if (pts === 3) obj.w++;
      else if (pts === 1) obj.d++;
      else if (pts === 0) obj.l++;
    };

    if (row.t1_home_gf != null) {
      acc.t1.home.played++;
      acc.t1.home.gf += safe(row.t1_home_gf);
      acc.t1.home.ga += safe(row.t1_home_ga);
      acc.t1.home.pts += safe(row.t1_home_pts);
      addResult(acc.t1.home, row.t1_home_pts);
    }

    if (row.t1_away_gf != null) {
      acc.t1.away.played++;
      acc.t1.away.gf += safe(row.t1_away_gf);
      acc.t1.away.ga += safe(row.t1_away_ga);
      acc.t1.away.pts += safe(row.t1_away_pts);
      addResult(acc.t1.away, row.t1_away_pts);
    }

    if (row.t2_home_gf != null) {
      acc.t2.home.played++;
      acc.t2.home.gf += safe(row.t2_home_gf);
      acc.t2.home.ga += safe(row.t2_home_ga);
      acc.t2.home.pts += safe(row.t2_home_pts);
      addResult(acc.t2.home, row.t2_home_pts);
    }

    if (row.t2_away_gf != null) {
      acc.t2.away.played++;
      acc.t2.away.gf += safe(row.t2_away_gf);
      acc.t2.away.ga += safe(row.t2_away_ga);
      acc.t2.away.pts += safe(row.t2_away_pts);
      addResult(acc.t2.away, row.t2_away_pts);
    }

    return acc;

  }, {
    t1: { home:{gf:0,ga:0,pts:0,played:0,w:0,d:0,l:0}, away:{gf:0,ga:0,pts:0,played:0,w:0,d:0,l:0} },
    t2: { home:{gf:0,ga:0,pts:0,played:0,w:0,d:0,l:0}, away:{gf:0,ga:0,pts:0,played:0,w:0,d:0,l:0} }
  });

  ["t1","t2"].forEach(team => {
    summary[team].total = {
      gf: summary[team].home.gf + summary[team].away.gf,
      ga: summary[team].home.ga + summary[team].away.ga,
      pts: summary[team].home.pts + summary[team].away.pts,
      played: summary[team].home.played + summary[team].away.played,
      w: summary[team].home.w + summary[team].away.w,
      d: summary[team].home.d + summary[team].away.d,
      l: summary[team].home.l + summary[team].away.l
    };
  });

  return summary;
}

export function summariseDirectComparison(data) {

  const summary = {
    t1: { home:{gf:0,ga:0,swing:0,played:0,w:0,d:0,l:0}, away:{gf:0,ga:0,swing:0,played:0,w:0,d:0,l:0}, total:{} },
    t2: { home:{gf:0,ga:0,swing:0,played:0,w:0,d:0,l:0}, away:{gf:0,ga:0,swing:0,played:0,w:0,d:0,l:0}, total:{} }
  };

  const addResult = (obj, pts) => {
    if (pts === 3) obj.w++;
    else if (pts === 1) obj.d++;
    else if (pts === 0) obj.l++;
  };

  data.forEach(row => {

    if (row.t1_home_swing != null) {

      summary.t1.home.gf += row.t1_home_gf ?? 0;
      summary.t1.home.ga += row.t1_home_ga ?? 0;
      summary.t1.home.swing += row.t1_home_swing ?? 0;
      summary.t1.home.played++;
      addResult(summary.t1.home, row.t1_home_pts);

      summary.t2.home.gf += row.t2_home_gf ?? 0;
      summary.t2.home.ga += row.t2_home_ga ?? 0;
      summary.t2.home.swing += row.t2_home_swing ?? 0;
      summary.t2.home.played++;
      addResult(summary.t2.home, row.t2_home_pts);
    }

    if (row.t1_away_swing != null) {

      summary.t1.away.gf += row.t1_away_gf ?? 0;
      summary.t1.away.ga += row.t1_away_ga ?? 0;
      summary.t1.away.swing += row.t1_away_swing ?? 0;
      summary.t1.away.played++;
      addResult(summary.t1.away, row.t1_away_pts);

      summary.t2.away.gf += row.t2_away_gf ?? 0;
      summary.t2.away.ga += row.t2_away_ga ?? 0;
      summary.t2.away.swing += row.t2_away_swing ?? 0;
      summary.t2.away.played++;
      addResult(summary.t2.away, row.t2_away_pts);
    }

  });

  ["t1","t2"].forEach(team => {
    summary[team].total = {
      gf: summary[team].home.gf + summary[team].away.gf,
      ga: summary[team].home.ga + summary[team].away.ga,
      swing: summary[team].home.swing + summary[team].away.swing,
      played: summary[team].home.played + summary[team].away.played,
      w: summary[team].home.w + summary[team].away.w,
      d: summary[team].home.d + summary[team].away.d,
      l: summary[team].home.l + summary[team].away.l
    };
  });

  return summary;
}


export function getTeamFormFixtures({
  fixtures,
  teamName,
  anchorDate,
  pastCount = 5,
  futureCount = 2
}) {
  // 1. filter fixtures involving team
  const teamFixtures = fixtures.filter(f =>
    f.home_team === teamName || f.away_team === teamName
  );

  // 2. sort by fixture_date
  const sorted = [...teamFixtures].sort(
    (a, b) => new Date(a.fixture_date) - new Date(b.fixture_date)
  );

  // 3. split past / future
  const past = [];
  const future = [];

  for (const f of sorted) {
    const date = new Date(f.fixture_date);
    if (date < anchorDate) past.push(f);
    else if (date > anchorDate) future.push(f);
  }

  // 4. slice what you need
  const last = past.slice(-pastCount).reverse(); // most recent first
  const next = future.slice(0, futureCount);

  return {
    past: last,
    future: next,
    all: [...last, ...next]
  };
}

export function formatDayMonth(dateStr) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}`;
}