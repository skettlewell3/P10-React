import { useState, useEffect } from "react";
import { useScoringClub } from "../../hooks/useScoringClub";
import ScoringBreakdownClub from "./ScoringBreakdownClub";
import ScoringBreakdownUser from "./ScoringBreakdownUser";

export default function ScoringBreakdownContainer({ fixture_id, subjectType }) {
    const [selectedClub, setSelectedClub] = useState(null);
    const { clubScoring } = useScoringClub();

    useEffect(() => {
        if (!selectedClub && clubScoring.length > 0) {
            setSelectedClub(clubScoring[0].club_id);
        }
    }, [clubScoring, selectedClub]);

    return (
        <div className="scoringBreakdownContainer">
            <div className="breakdownContent">
                {subjectType === "club" && (
                    <ScoringBreakdownClub  
                        fixture_id={fixture_id}
                        selectedClub={selectedClub}
                        activeSubject={subjectType}
                    />
                )}

                {subjectType === "user" && selectedClub && (
                    <ScoringBreakdownUser
                        fixture_id={fixture_id}
                        club_id={selectedClub}
                        activeSubject={subjectType}
                    />
                )}
            </div>
        </div>
    )
}