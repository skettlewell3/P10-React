import { useStatsUserLeagueTable } from '../../hooks/useStatsUserLeagueTable';
import { useStatsClubLeagueTable } from '../../hooks/useStatsClubLeagueTable';
import { GLOBAL_CLUB_ID } from "../../constants/clubs.js";
import LeagueTableHeader from "./LeagueTableHeader";
import LeagueTableBodyDumb from "./LeagueTableBodyDumb";

export default function LeagueTableContainer({ subjectType, highlightedClub }) {
    const { userStatsLeagueTable, loading: userLoading } = useStatsUserLeagueTable();
    const { clubStatsLeagueTable, loading: clubLoading } = useStatsClubLeagueTable();

    const loading = subjectType === "user" ? userLoading : clubLoading;

    let tableData = [];

    if (!loading) {
        if (subjectType === "user") {
            tableData = userStatsLeagueTable ?? [];
        } else {
            tableData = (clubStatsLeagueTable ?? []).filter(row =>
                highlightedClub === GLOBAL_CLUB_ID
                    ? row.club_id === GLOBAL_CLUB_ID
                    : row.club_id === highlightedClub
            );
        }
    }

    if (loading) {
        return (
            <div className="statsSection">
                <div className="statsSectionTitle">PREDICTED LEAGUE TABLE</div>
                <p className="leagueTableStatus">Loading…</p>
            </div>
        );
    }

    if (!tableData.length) {
        return (
            <div className="statsSection">
                <div className="statsSectionTitle">PREDICTED LEAGUE TABLE</div>
                <p className="leagueTableStatus">No data available</p>
            </div>
        );
    }

    return (
        <div className="statsSection">
            <div className="statsSectionTitle">PREDICTED LEAGUE TABLE</div>
            <div className="leagueTableItem">
                <LeagueTableHeader />
                <LeagueTableBodyDumb
                    tableData={tableData}
                    subjectId={subjectType === "user" ? "user" : highlightedClub}
                />
            </div>
        </div>
    );
}