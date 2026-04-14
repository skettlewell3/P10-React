import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePredictionsUser } from "../../hooks/usePredictionsUser";
import { classifyTeamName } from "../../utils/utils";
import { usePremLeagueTables } from "../../hooks/usePremLeagueTables";

export default function FixtureFieldsetDB({ 
  fixture, 
  mode, 
  toggledContent, 
  canToggle,
  openMatchModal,
  value,
  onChange
}) {
  const { fixture_id, home_team, home_short, away_team, away_short, home_goals, away_goals } = fixture;
  const { overallTable } = usePremLeagueTables();
  const { loading } = usePredictionsUser();

  const location = useLocation();
  const allowedPaths = ["/predict", "/review"];
  const showModalButton = allowedPaths.includes(location.pathname) && typeof openMatchModal === "function";

  const homeValue = value?.home ?? '';
  const awayValue = value?.away ?? '';

  const [expanded, setExpanded] = useState(false);

  const handleToggle = (e) => {
    if (!canToggle) return;
    if (e.target.classList.contains('pred')) return;
    setExpanded(prev => !prev);
  };

  const handleHomeChange = (e) => {
    onChange?.({
      home: e.target.value,
      away: awayValue
    });
  };

  const handleAwayChange = (e) => {
    onChange?.({
      home: homeValue,
      away: e.target.value
    });
  };

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
      <fieldset
        className={`match ${showModalButton ? "withModal" : "noModal"}`}
        onClick={handleToggle}
      >
        {showModalButton && 
          <div
            className="matchModalButton"
            onClick={(e) => {
              e.stopPropagation();
              openMatchModal(fixture);
            }}
          >
            ⓘ
          </div>
        }

        {/* HOME */}
        {mode === "form" ? (
          <div className={`team pos home ${classifyTeamName(home_team)}`} title={home_team}>
            <div className="teamPos">{homePos ? toOrdinalSpan(homePos) : ''}</div>
            <div className="posName">{home_short}</div>
          </div>
        ) : (
          <div className={`team home ${classifyTeamName(home_team)}`} title={home_team}>
            {home_short}
          </div>
        )}

        {/* HOME INPUT / SCORE */}
        {mode === "form" ? (
          <div className="homePred">
            <input
              type="number"
              className="pred"
              name={home_team}
              min="0"
              max="10"
              value={homeValue}
              onChange={handleHomeChange}
              disabled={loading}
            />
          </div>
        ) : (
          <div className="homeScore">{home_goals}</div>
        )}

        <div className="v">v</div>

        {/* AWAY INPUT / SCORE */}
        {mode === "form" ? (
          <div className="awayPred">
            <input
              type="number"
              className="pred"
              name={away_team}
              min="0"
              max="10"
              value={awayValue}
              onChange={handleAwayChange}
              disabled={loading}
            />
          </div>
        ) : (
          <div className="awayScore">{away_goals}</div>
        )}

        {/* AWAY */}
        {mode === "form" ? (
          <div className={`team pos away ${classifyTeamName(away_team)}`} title={away_team}>
            <div className="posName">{away_short}</div>
            <div className="teamPos">{awayPos ? toOrdinalSpan(awayPos) : ''}</div>
          </div>
        ) : (
          <div className={`team away ${classifyTeamName(away_team)}`} title={away_team}>
            {away_short}
          </div>
        )}
      </fieldset>

      {expanded && toggledContent && (
        <div className="fieldsetToggledContainer">
          {React.cloneElement(toggledContent, {
            fixture_id
          })}
        </div>
      )}
    </div>
  );
}