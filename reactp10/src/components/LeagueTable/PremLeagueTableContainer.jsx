import { useState } from "react";
import { usePremLeagueTables } from "../../hooks/usePremLeagueTables";
import LeagueTableHeader from "./LeagueTableHeader";
import LeagueTableBodyDumb from "./LeagueTableBodyDumb";
import PremLeagueTableToggle from "./PremLeagueTableToggle";

export default function PremLeagueTableContainer() {
    const {
        overallTable,
        homeTable,
        awayTable,
        form5Table,
        form10Table,
        loading
    } = usePremLeagueTables();

    const [mode, setMode] = useState("overall");

    let tableData = [];

    if (mode === "overall") tableData = overallTable;
    if (mode === "home") tableData = homeTable;
    if (mode === "away") tableData = awayTable;
    if (mode === "form5") tableData = form5Table;
    if (mode === "form10") tableData = form10Table;

    if (loading) {
        return <p>Loading…</p>;
    }

    return (
        <div className="statsSection">
            <div className="statsSectionTitle">
                PREMIER LEAGUE TABLE
            </div>
            <PremLeagueTableToggle
                mode={mode}
                setMode={setMode}
            />


            <div className="leagueTableItem">
                <LeagueTableHeader />
                <LeagueTableBodyDumb
                    tableData={tableData}
                />
            </div>
        </div>
    );
}