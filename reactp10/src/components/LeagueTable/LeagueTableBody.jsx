import { useStatsUserLeagueTable } from '../../hooks/useStatsUserLeagueTable';
import LeagueTableRow from './LeagueTableRow';

export default function LeagueTableBody() {
    const { userStatsLeagueTable, loading } = useStatsUserLeagueTable();

    if (loading) {
        return <div className="leagueTableSatus">Loading…</div>;
    }

    if (!userStatsLeagueTable.length) {
        return <div className="leagueTableSatus">No data</div>;
    }

    return (
        <div className="leagueTableBody">
            {userStatsLeagueTable.map(row => (
                <LeagueTableRow
                    key={row.team_name}
                    data={row}
                />
            ))}
        </div>
    );
}
