export default function TeamComparisonCore({ data }) {
  if (!data || !data.length) return <p>No data available</p>;

  console.log("compatisondata:", data);

  return (
    <div className="teamComparisonCore">
      <div className="comparisonGrid">
        {data.map((row) => (
          <div key={row.opponent_id} className="comparisonRow">
            <span>{row.opponent_short}</span>
            <span>{row.t1_home_gf}-{row.t1_home_ga}</span>
            <span>{row.t1_home_pts}</span>
            <span>{row.t1_home_swing}</span>
            <span>{row.t1_away_gf}-{row.t1_away_ga}</span>
            <span>{row.t1_away_pts}</span>
            <span>{row.t1_away_swing}</span>
            <span>{row.t2_home_gf}-{row.t2_home_ga}</span>
            <span>{row.t2_home_pts}</span>
            <span>{row.t2_home_swing}</span>
            <span>{row.t2_away_gf}-{row.t2_away_ga}</span>
            <span>{row.t2_away_pts}</span>
            <span>{row.t2_away_swing}</span>
          </div>
        ))}
      </div>
    </div>
  );
}