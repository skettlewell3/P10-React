import ViewTitleContainer from "../ViewTitleContainer"
import LeagueTableContainer from "../LeagueTable/LeagueTableContainer"

export default function StatsView({ subjectType, setSubjectType, highlightedClub, setHighlightedClub, clubs }) {

    return (
        <>
        <ViewTitleContainer
            title="Stats" 
            subjectType={subjectType}
            setSubjectType={setSubjectType}
            highlightedClub={highlightedClub}
            setHighlightedClub={setHighlightedClub}
            clubs={clubs}
        />        
        
        <LeagueTableContainer 
            subjectType={subjectType}
            highlightedClub={highlightedClub}
        />        
        </>
    )
}