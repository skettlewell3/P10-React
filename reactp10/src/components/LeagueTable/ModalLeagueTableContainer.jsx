import { useEffect } from "react";
import LeagueTableHeader from "./LeagueTableHeader";
import { useSearchAnyStatsPLT } from "../../hooks/useSearchAnyStatsPLT";
import LeagueTableBodyDumb from "./LeagueTableBodyDumb";

export default function ModalLeagueTableContainer({ subjectType, subjectId }) {
    const { predictedLeagueTable, loading, fetchPLT } = useSearchAnyStatsPLT({
        id: subjectId,
        isTeam: subjectType === "club",
    });

    // trigger fetch if needed
    useEffect(() => {
        if (subjectId && (!predictedLeagueTable || predictedLeagueTable.length === 0)) {
            fetchPLT(subjectId);
        }
    }, [subjectId, predictedLeagueTable, fetchPLT]);

    if (loading) return <p>Loading League Table...</p>;
    if (!predictedLeagueTable || predictedLeagueTable.length === 0) return <p>No league table data available</p>;

    return (
        <div className="statsSection modalSection">
            <div className="statsSectionTitle">PREDICTED LEAGUE TABLE</div>
            <div className="leagueTableItem">
                <LeagueTableHeader />
                <LeagueTableBodyDumb
                    tableData={predictedLeagueTable}
                    subjectId={subjectId}
                />
            </div>
        </div>
    );
}