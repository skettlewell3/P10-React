import { classifyTeamName } from "../../utils/utils";

export default function MatchFixtureRow({ fixture }) {
  if (!fixture) return null;

  const {
    home_team,
    home_short,
    away_team,
    away_short,
    home_goals,
    away_goals
  } = fixture;

  return (
    <fieldset className="match noModal modalFieldset">
      
      <div
        className={`team home ${classifyTeamName(home_team)}`}
        title={home_team}
      >
        {home_short}
      </div>

      <div className="homeScore">
        {home_goals ?? ""}
      </div>

      <div className="v">v</div>

      <div className="awayScore">
        {away_goals ?? ""}
      </div>

      <div
        className={`team away ${classifyTeamName(away_team)}`}
        title={away_team}
      >
        {away_short}
      </div>

    </fieldset>
  );
}