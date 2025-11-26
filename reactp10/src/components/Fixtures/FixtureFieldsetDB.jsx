import { useState, useEffect } from "react";
import { usePredictionsUser } from "../../hooks/usePredictionsUser";
import { classifyTeamName } from "../../utils/utils";

export default function FixtureFieldsetDB({ fixture, mode }) {
  const { fixture_id, home_team, home_short, away_team, away_short, home_goals, away_goals } = fixture;

  const { userPredictions, loading } = usePredictionsUser();

  const [homeValue, setHomeValue] = useState('');
  const [awayValue, setAwayValue] = useState('');

  useEffect(() => {
    if (loading) return;

    const prediction = userPredictions.find(p => p.fixture_id === fixture_id);

    setHomeValue(prediction?.pred_home_goals ?? '');
    setAwayValue(prediction?.pred_away_goals ?? '');
  }, [fixture_id, userPredictions, loading]);

  return (
    <fieldset className="match">
      <div className={`team home ${classifyTeamName(home_team)}`} title={home_team}>
        {home_short}
      </div>

      {mode === "form" ? (
        <div className="homePred">
          <input
            type="number"
            className="pred"
            name={home_team}
            min="0"
            max="10"
            required
            value={homeValue}
            onChange={(e) => setHomeValue(e.target.value)}
          />
        </div>
      ) : (
        <div className="homeScore">{home_goals}</div>
      )}

      <div className="v">v</div>

      {mode === "form" ? (
        <div className="awayPred">
          <input
            type="number"
            className="pred"
            name={away_team}
            min="0"
            max="10"
            required
            value={awayValue}
            onChange={(e) => setAwayValue(e.target.value)}
          />
        </div>
      ) : (
        <div className="awayScore">{away_goals}</div>
      )}

      <div className={`team away ${classifyTeamName(away_team)}`} title={away_team}>
        {away_short}
      </div>
    </fieldset>
  );
}
