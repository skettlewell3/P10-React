import ContentContainer from "../ContentContainer"
import ViewTitle from "../ViewTitle"
import LeagueTableContainer from "../LeagueTable/LeagueTableContainer"

export default function NewsView() {
    return (
        <>
        <ViewTitle title="Stats" />        
        <ContentContainer>
            <LeagueTableContainer />
        </ContentContainer>
        </>
    )
}