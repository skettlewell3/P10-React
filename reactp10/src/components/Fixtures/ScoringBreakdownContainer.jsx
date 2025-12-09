import { useState, useEffect } from "react";
import { useScoringClub } from "../../hooks/useScoringClub";
import ScoringBreakdownClub from "./ScoringBreakdownClub";
import ScoringBreakdownUser from "./ScoringBreakdownUser";

export default function ScoringBreakdownContainer({ fixture_id }) {
    const [activeTab, setActiveTab] = useState("club");
    const [selectedClub, setSelectedClub] = useState(null);

    const { clubScoring } = useScoringClub();

    useEffect(() => { 
        if (clubScoring.length === 0) {
            setActiveTab("users");
        }
    }, [clubScoring])

    useEffect(() => {
        if (!selectedClub && clubScoring.length > 0) {
            setSelectedClub(clubScoring[0].club_id);
        }
    }, [clubScoring, selectedClub]);

    return (
        <div className="scoringBreakdownContainer">
            <div className="breakdownTabs">
                <button onClick={() => setActiveTab("club")}>Clubs</button>
                <button onClick={() => setActiveTab("users")}>Users</button>
            </div>
            <div className="breakdownContent">
                {activeTab === "club" && (
                    <ScoringBreakdownClub  
                        fixture_id={fixture_id}
                        onSelectClub={setSelectedClub}
                        selectedClub={selectedClub}
                        activeTab={activeTab}
                    />
                )}

                {activeTab === "users" && selectedClub && (
                    <ScoringBreakdownUser
                        fixture_id={fixture_id}
                        club_id={selectedClub}
                        activeTab={activeTab}
                    />
                )}
            </div>
        </div>
    )
}