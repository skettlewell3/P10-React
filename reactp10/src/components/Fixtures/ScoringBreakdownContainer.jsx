import ScoringBreakdownClub from "./ScoringBreakdownClub";
import ScoringBreakdownUser from "./ScoringBreakdownUser";
import { GLOBAL_CLUB_ID } from "../../constants/clubs";

export default function ScoringBreakdownContainer({ fixture_id, subjectType, highlightedClub }) {

    return (
        <div className="scoringBreakdownContainer">
            <div className="breakdownContent">
                {subjectType === "club" && (
                    <ScoringBreakdownClub  
                        fixture_id={fixture_id}
                        selectedClub={highlightedClub}
                        activeSubject={subjectType}
                    />
                )}

               {subjectType === "user" && (
                  <ScoringBreakdownUser
                    fixture_id={fixture_id}
                    club_id={highlightedClub ?? GLOBAL_CLUB_ID}
                    activeSubject={subjectType}
                  />
                )}
            </div>
        </div>
    )
}