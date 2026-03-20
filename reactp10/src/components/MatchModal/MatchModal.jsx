import { useState, useEffect } from "react";
import TeamComparisonTool from "../ResultsComparison/TeamComparisonTool";
import { TEAMS } from "../../constants/teams";
import FormContainer from "../FormGuide/FormContainer";
import MatchFixtureCard from "./MatchFixtureCard";
import MMPremSnapshot from "./MMPremSnapshot";
import MatchNav from "./MatchNav";

export default function MatchModal({ fixture, fixtures, filteredFixtures, onClose }) {
    const [currentFixture, setCurrentFixture] = useState(fixture);

    useEffect(() => {
      setCurrentFixture(fixture);
    }, [fixture]);

    if (!currentFixture) return null;

    const index = filteredFixtures.findIndex(
      (f) => f.fixture_id === currentFixture.fixture_id
    );

    const prevFixture = index > 0 ? filteredFixtures[index - 1] : null;
    const nextFixture = index < filteredFixtures.length - 1 ? filteredFixtures[index + 1] : null;

    const goPrev = () => {
      if (prevFixture) setCurrentFixture(prevFixture);
    };

    const goNext = () => {
      if (nextFixture) setCurrentFixture(nextFixture);
    };

    const team1Id = TEAMS.find(t => t.name === currentFixture.home_team)?.id;
    const team2Id = TEAMS.find(t => t.name === currentFixture.away_team)?.id;

    return (
        <>
            <div id="modalOverlay" onClick={onClose}></div>

            <div id="teamModal">
              <div id="teamModalCard">

                {/* HEADER */}
                <div className="modalHeader">

                  <MatchNav 
                    currentFixture={currentFixture}
                    goPrev={goPrev}
                    goNext={goNext}
                    hasPrev={!!prevFixture}
                    hasNext={!!nextFixture}                  
                  />

                  <button id="teamModalClose" onClick={onClose}>
                    ✕
                  </button>

                </div>

                {/* BODY */}
                <div className="modalCardBody">

                  <MatchFixtureCard fixture={currentFixture} />

                  <MMPremSnapshot 
                    team1Id={team1Id}
                    team2Id={team2Id}   
                  />


                  <FormContainer 
                    fixtures={fixtures}
                    team1Id={team1Id}
                    team2Id={team2Id}
                    currentFixture={currentFixture}
                  />      

                  
                
                  <TeamComparisonTool
                    teamsFromFixture={{
                      team1: team1Id,
                      team2: team2Id,
                    }}
                  />

                  
                    

                </div>
                    
              </div>
            </div>
        </>
  );    
}