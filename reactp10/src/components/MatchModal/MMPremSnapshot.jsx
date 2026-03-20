import LeagueTableHeader from "../LeagueTable/LeagueTableHeader";
import LeagueTableBodyDumb from "../LeagueTable/LeagueTableBodyDumb"
import { usePremLeagueTables } from "../../hooks/usePremLeagueTables";


export default function MMPremSnapshot({ team1Id, team2Id }) {

    const {
        overallTable,
        loading
    } = usePremLeagueTables();

    if (loading) return null;

    const baseTable = overallTable;

    const dataSet = baseTable.filter(
        row => row.team_id === team1Id || row.team_id === team2Id
    )

    const sorted = [...dataSet].sort((a, b) => a.pos - b.pos);

    return (
        <div className="modalPremSnapshot leagueTableItem">
            <LeagueTableHeader />
            <LeagueTableBodyDumb 
                tableData={sorted}
                isModal="true"
            />
        </div>
    )
}