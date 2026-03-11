import { useState, useMemo } from 'react';
import TeamComparisonRow from "./TeamComparisonRow";
import TeamComparisonToggle from './TeamComparisonToggle';
import TeamComparisonHeader from './TeamComparisonHeader';
import TeamComparisonSummary from './TeamComparisonSummary';

export default function TeamComparisonCore({ data, teams }) {
  const [comparisonMode, setComparisonMode] = useState("generic");
  
  const comparisonData = useMemo(() => {
    if (comparisonMode === "generic") return data;
    // filter out rows with incomplete swing data in direct mode
    return data.filter(row => {
      const swings = [
        row.t1_home_swing,
        row.t1_away_swing,
        row.t2_home_swing,
        row.t2_away_swing
      ];
      return swings.some(s => s !== null && s !== undefined);
    })    
  }, [data, comparisonMode]);

  console.log("comparisonData:", data )
  
  if (!data || !data.length) return <p>No data available</p>;
  return (
    <div className="teamComparisonCore">
      <TeamComparisonToggle
        comparisonMode={comparisonMode}
        setComparisonMode={setComparisonMode}
      />
      <div className="comparisonGrid">
        <TeamComparisonSummary 
          data={comparisonData}
          comparisonMode={comparisonMode}
        />
        <TeamComparisonHeader 
          comparisonMode={comparisonMode}
          teams={teams}
        />
        {comparisonData.map((row) => (
          <TeamComparisonRow 
            key={row.opponent_id} 
            rowData={row}
            viewMode={comparisonMode}
            teams={teams}
          />
        ))}
        
      </div>
    </div>
  );
}