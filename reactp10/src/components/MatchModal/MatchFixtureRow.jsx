import { useEffect, useState } from "react";
import { classifyTeamName } from "../../utils/utils";
import { usePremLeagueTables } from "../../hooks/usePremLeagueTables";

export default function MatchFixtureRow({ 
  fixture,
  value,
  onChange 
}) {
  const { overallTable } = usePremLeagueTables(); 
  const [homePos, setHomePos] = useState('');
  const [awayPos, setAwayPos] = useState('');

  const {
    home_team,
    home_short,
    away_team,
    away_short,
  } = fixture || {}; 

  useEffect(() => {
    if (!fixture || !overallTable?.length) return;

    const homeData = overallTable.find(h => h.team_name === home_team);
    const awayData = overallTable.find(a => a.team_name === away_team);

    setHomePos(homeData?.pos ?? '');
    setAwayPos(awayData?.pos ?? '');
  }, [overallTable, home_team, away_team, fixture]);

  if (!fixture) return null; 

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

  const homeValue = value?.home ?? '';
  const awayValue = value?.away ?? '';

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

  return (
    <fieldset className="match noModal modalFieldset">

      <div className={`team pos home ${classifyTeamName(home_team)}`} title={home_team}>
        <div className="teamPos">
          {homePos ? toOrdinalSpan(homePos) : ''}
        </div>
        <div className="posName">{home_short}</div>
      </div>

      <div className="homeScore">
        <input
          type="number"
          min="0"
          max="10"
          className="pred"
          value={homeValue}
          onChange={handleHomeChange}
        />
      </div>

      <div className="v">v</div>

      <div className="awayScore">
        <input
          type="number"
          min="0"
          max="10"
          className="pred"
          value={awayValue}
          onChange={handleAwayChange}
        />
      </div>

      <div className={`team pos away ${classifyTeamName(away_team)}`} title={away_team}>
        <div className="posName">{away_short}</div>
        <div className="teamPos">
          {awayPos ? toOrdinalSpan(awayPos) : ''}
        </div>
      </div>

    </fieldset>
  );
}