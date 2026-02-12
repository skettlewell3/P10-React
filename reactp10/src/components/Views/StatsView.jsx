import ViewTitleContainer from "../ViewTitleContainer"
import LeagueTableContainer from "../LeagueTable/LeagueTableContainer"
import { SeasonCoreContainer } from "../Stats/SeasonCoreContainer"
import StatsContainer from "../Stats/StatsContainer"
import { SeasonHighsContainer } from "../Stats/SeasonHighsContainer"

export default function StatsView({ subjectType, setSubjectType, highlightedClub, setHighlightedClub, clubs }) {

    return (
        <>
        <ViewTitleContainer
            title="Stats" 
            variant={subjectType === "user" ? "default" : "clubs"}
            subjectType={subjectType}
            setSubjectType={setSubjectType}
            highlightedClub={highlightedClub}
            setHighlightedClub={setHighlightedClub}
            clubs={clubs}
        />   

        <StatsContainer>
            <SeasonCoreContainer 
                subjectType={subjectType}
                highlightedClub={highlightedClub}
            /> 

            <SeasonHighsContainer 
                subjectType={subjectType}
                highlightedClub={highlightedClub}
            />
            
            <LeagueTableContainer 
                subjectType={subjectType}
                highlightedClub={highlightedClub}
            />         
        </StatsContainer>

        </>
    )
}