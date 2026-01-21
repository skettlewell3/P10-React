import LeagueTableBody from "./LeagueTableBody";
import LeagueTableHeader from "./LeagueTableHeader";

export default function LeagueTableContainer({ subjectType }) {
    return (
        <div className="leagueTableContainer">
            <LeagueTableHeader />
            <LeagueTableBody 
                subjectType={subjectType}
            />
        </div>
    )
}