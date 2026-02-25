import React, { useState, useEffect } from "react";
import { usePredictionsUser } from "../../hooks/usePredictionsUser";
import { classifyTeamName } from "../../utils/utils";
import { useUser } from "../../hooks/useUser";
import { usePremLeagueTables } from "../../hooks/usePremLeagueTables";

export default function FixtureFieldsetDB({ fixture, mode, toggledContent, canToggle }) {
  const { fixture_id, home_team, home_short, away_team, away_short, home_goals, away_goals } = fixture;
  const { user } = useUser();
  const { overallTable } = usePremLeagueTables();

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
    if (!canToggle) return;
    if (e.target.classList.contains('pred')) return;
    setExpanded(prev => !prev);
  }

  const [homePos, setHomePos] = useState('');
  const [awayPos, setAwayPos] = useState('');

  useEffect(() => {
    if (mode !== "form") return;

    const homeData = overallTable.find(h => h.team_name === home_team);
    const awayData = overallTable.find(a => a.team_name === away_team);

    setHomePos(homeData?.pos ?? '');
    setAwayPos(awayData?.pos ?? '');
  }, [overallTable, home_team, away_team, mode]);

  function toOrdinalSpan(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  const suffix = s[(v - 20) % 10] || s[v] || s[0];

  return (
    <span>
      {n}<sup>{suffix}</sup>
    </span>
  );
}


  return (
    <div className="fixtureFieldsetWrapper">
      <fieldset className="match" onClick={handleToggle}>
        {mode === "form" ? (
          <div className={`team pos home ${classifyTeamName(home_team)}`} title={home_team}>
            <div className={`teamPos ${classifyTeamName(home_team)}`}>
              {homePos ? toOrdinalSpan(homePos) : ''}
            </div>
            <div className="posName">
              {home_short}
            </div>
          </div>
        ) : (
          <div className={`team home ${classifyTeamName(home_team)}`} title={home_team}>
            {home_short}
          </div>
        )}

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

        {mode === "form" ? (
          <div className={`team pos away ${classifyTeamName(away_team)}`} title={away_team}>
            <div className="posName">
              {away_short}
            </div>
            <div className={`teamPos ${classifyTeamName(away_team)}`}>
              {awayPos ? toOrdinalSpan(awayPos) : ''}
            </div>
          </div>
        ) : (
          <div className={`team away ${classifyTeamName(away_team)}`} title={away_team}>
            {away_short}
          </div>
        )}

        {/* <div className={`team away ${classifyTeamName(away_team)}`} title={away_team}>
          {away_short}
        </div> */}
      </fieldset>

      {expanded && toggledContent && (
        <div className="fieldsetToggledContainer">
          {React.cloneElement(toggledContent, { 
            fixture_id,
            userPredictions
          })}
        </div>
      )}

    </div>
  );
}
