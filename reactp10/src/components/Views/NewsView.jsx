import ViewTitle from "../ViewTitle"
import StatsContainer from "../Stats/StatsContainer"
import PremLeagueTableContainer from "../LeagueTable/PremLeagueTableContainer"


export default function NewsView() {
    return (
        <>
        <ViewTitle title="News" />    
        <StatsContainer>
            <PremLeagueTableContainer />
        </StatsContainer>
        </>
    )
}