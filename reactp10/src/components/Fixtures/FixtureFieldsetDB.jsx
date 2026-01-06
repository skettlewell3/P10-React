import React, { useState, useEffect } from "react";
import { usePredictionsUser } from "../../hooks/usePredictionsUser";
import { classifyTeamName } from "../../utils/utils";
import { useUser } from "../../hooks/useUser";

export default function FixtureFieldsetDB({ fixture, mode, toggledContent }) {
  const { fixture_id, home_team, home_short, away_team, away_short, home_goals, away_goals, fixture_status } = fixture;
  const { user } = useUser();

  const { userPredictions, loading } = usePredictionsUser();

  const [homeValue, setHomeValue] = useState('');
  const [awayValue, setAwayValue] = useState('');

  useEffect(() => {
    if (loading || !user) return;

    const prediction = userPredictions.find(
      p => p.fixture_id === fixture_id && p.user_id === user.user_id);

    setHomeValue(prediction?.pred_home_goals ?? '');
    setAwayValue(prediction?.pred_away_goals ?? '');
  }, [fixture_id, userPredictions, loading, user]);

  const [ expanded, setExpanded ] = useState(false);

  const handleToggle = (e) => {
    if (e.target.classList.contains('pred')) return;
    setExpanded(prev => !prev);
  }

  return (
    <div className="fixtureFieldsetWrapper">
      <fieldset className="match" onClick={handleToggle}>
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
        ) : (
          <div className="awayScore">{away_goals}</div>
        )}

        <div className={`team away ${classifyTeamName(away_team)}`} title={away_team}>
          {away_short}
        </div>
      </fieldset>

      {expanded && toggledContent && (
        <div className="fieldsetToggledContainer">
          {React.cloneElement(toggledContent, { 
            fixture_id, 
            fixture_status,
            userPredictions
          })}
        </div>
      )}

    </div>
  );
}
