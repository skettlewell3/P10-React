import LeagueTableBody from "./LeagueTableBody";
import LeagueTableHeader from "./LeagueTableHeader";

export default function LeagueTableContainer({}) {
    return (
        <div className="leagueTableContainer">
            <LeagueTableHeader />
            <LeagueTableBody />
        </div>
    )
}