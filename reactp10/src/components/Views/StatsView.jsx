import ViewTitleContainer from "../ViewTitleContainer"
import LeagueTableContainer from "../LeagueTable/LeagueTableContainer"

export default function StatsView({ subjectType, setSubjectType }) {
    return (
        <>
        <ViewTitleContainer
            title="Stats" 
            subjectType={subjectType}
            setSubjectType={setSubjectType}
        />        
        
        <LeagueTableContainer 
            subjectType={subjectType}
        />        
        </>
    )
}