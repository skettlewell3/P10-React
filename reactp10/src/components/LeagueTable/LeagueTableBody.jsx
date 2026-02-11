import { useStatsUserLeagueTable } from '../../hooks/useStatsUserLeagueTable';
import { useStatsClubLeagueTable } from '../../hooks/useStatsClubLeagueTable';
import { GLOBAL_CLUB_ID } from "../../constants/clubs.js"
import LeagueTableRow from './LeagueTableRow';

export default function LeagueTableBody({ subjectType, highlightedClub }) {
    const { 
        userStatsLeagueTable, 
        loading: userLoading, 
    } = useStatsUserLeagueTable();

    const { 
        clubStatsLeagueTable, 
        loading: clubLoading, 
    } = useStatsClubLeagueTable();

    const loading = subjectType === "user" ? userLoading : clubLoading;
    
    if (loading) {
        return <div className="leagueTableSatus">Loading…</div>;
    }

    let tableData;
    
    if (subjectType === "user") {
        tableData = userStatsLeagueTable;
    } else {
        tableData = clubStatsLeagueTable.filter(row => 
            highlightedClub === GLOBAL_CLUB_ID
            ? row.club_id === GLOBAL_CLUB_ID
            : row.club_id === highlightedClub
        );
    }

    if (!tableData.length) {
        return <div className="leagueTableSatus">No data</div>;
    }

    return (
        <div className="leagueTableBody">
            {tableData.map(row => (
                <LeagueTableRow
                    key={subjectType ==="user"
                        ? `${row.team_name}`
                        : `${row.club_id}-${row.team_name}`}
                    data={row}
                />
            ))}
        </div>
    );
}
