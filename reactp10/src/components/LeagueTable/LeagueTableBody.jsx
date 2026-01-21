import { useStatsUserLeagueTable } from '../../hooks/useStatsUserLeagueTable';
import { useStatsClubLeagueTable } from '../../hooks/useStatsClubLeagueTable';
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

    const tableData = 
        subjectType === "user"
        ? userStatsLeagueTable
        : clubStatsLeagueTable.filter(
            row => row.club_id !== highlightedClub
        )
    ;

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
