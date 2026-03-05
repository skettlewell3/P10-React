import ViewTitle from "../ViewTitle"
import StatsContainer from "../Stats/StatsContainer"
import PremLeagueTableContainer from "../LeagueTable/PremLeagueTableContainer"
import TeamComparisonTool from "../ResultsComparison/TeamComparisonTool"


export default function NewsView() {
    return (
        <>
        <ViewTitle title="News" />    
        <StatsContainer>
            <PremLeagueTableContainer />
            <TeamComparisonTool />
        </StatsContainer>
        </>
    )
}