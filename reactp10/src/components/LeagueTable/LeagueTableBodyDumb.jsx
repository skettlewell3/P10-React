import LeagueTableRow from "./LeagueTableRow";

export default function LeagueTableBodyDumb({ tableData, subjectId, isModal }) {
    if (!tableData || tableData.length === 0) {
        return <p className="leagueTableStatus">No data available</p>;
    }

    return (
        <div className="leagueTableBody">
            {tableData.map((row) => (
                <LeagueTableRow
                    key={subjectId ? `${subjectId}-${row.team_name}` : row.team_name}
                    data={row}
                    isModal={isModal}
                />
            ))}
        </div>
    );
}