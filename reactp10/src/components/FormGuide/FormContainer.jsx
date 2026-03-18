import { getTeamFormFixtures } from "../../utils/utils"
import { TEAMS } from "../../constants/teams";
import FormRow from "./FormRow"

export default function FormContainer({ 
    fixtures, 
    team1Id, 
    team2Id,
    currentFixture
}) {

    const sizeMap = [1.1, 1.05, 1, 0.95, 0.9];

    const anchorDate = new Date(currentFixture.fixture_date);

    const team1Name = TEAMS.find(t => t.id === team1Id)?.name;
    const team2Name = TEAMS.find(t => t.id === team2Id)?.name;

    const team1Form = getTeamFormFixtures({
        fixtures,
        teamName: team1Name,
        anchorDate
    });

    const team2Form = getTeamFormFixtures({
        fixtures,
        teamName: team2Name,
        anchorDate
    });
    
    const team1Past = team1Form.past;
    const team2Past = team2Form.past;

    const maxRows = Math.max(team1Past.length, team2Past.length);

    console.log("formFixtures 1: ", team1Form);
    console.log("formFixtures 2: ", team2Form);


    return (
        <div className="formContainer">
            {Array.from({ length: maxRows }).map((_, i) => {
                const fixture1 = team1Past[i] || null;
                const fixture2 = team2Past[i] || null;
            
                return (
                    <FormRow
                      key={i}
                      fixture1={fixture1}
                      fixture2={fixture2}
                      team1Name={team1Name}
                      team2Name={team2Name}
                      scale={sizeMap[i] || 0.9} // fallback if more than 5
                    />
                );
            })}
        </div>
    );
}