import { useState, useEffect } from "react";
import { TEAMS } from "../../constants/teams";
import MatchFixtureCard from "./MatchFixtureCard";
import MatchNav from "./MatchNav";
import MMPreviewContent from "./MMPreviewContent";
import MMReviewContent from "./MMReviewContent";

export default function MatchModal({ fixture, 
  fixtures, 
  filteredFixtures, 
  onClose, 
  subjectType 
}) {
    const [currentFixture, setCurrentFixture] = useState(fixture);

    const modalMode = currentFixture?.fixture_status === "upcoming" 
    ? "preview"
    : "review"

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

                  {modalMode === "preview" && (
                    <MMPreviewContent
                      team1Id={team1Id}
                      team2Id={team2Id}
                      fixtures={fixtures}
                      currentFixture={currentFixture}
                    />
                  )}

                  {modalMode === "review" && (
                    <MMReviewContent
                      fixture={currentFixture}
                      subjectType={subjectType}
                    />
                  )}               
                    

                </div>
                    
              </div>
            </div>
        </>
  );    
}