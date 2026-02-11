import LeagueTableBody from "./LeagueTableBody";
import LeagueTableHeader from "./LeagueTableHeader";

export default function LeagueTableContainer({ subjectType, highlightedClub }) {
    return (
        <div className="statsSection">
            <div className="statsSectionTitle">PREDICTED LEAGUE TABLE</div>
            <div className="leagueTableItem">
                <LeagueTableHeader />
                <LeagueTableBody 
                    subjectType={subjectType}
                    highlightedClub={highlightedClub}
                />
            </div>
        </div>
    )
}