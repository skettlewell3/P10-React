import MMPremSnapshot from "./MMPremSnapshot";
import FormContainer from "../FormGuide/FormContainer";
import TeamComparisonTool from "../ResultsComparison/TeamComparisonTool";

export default function MMPreviewContent({team1Id, team2Id, fixtures, currentFixture }) {

    return (
        <>
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
        </>
    )
}