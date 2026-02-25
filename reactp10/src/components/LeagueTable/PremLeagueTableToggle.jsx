export default function PremLeagueTableToggle({ mode, setMode }) {
    return (
        <div className="leagueTableToggle">
            <span
                className={mode === "overall" ? "active" : ""}
                onClick={() => setMode("overall")}
            >
                Overall
            </span>

            <span
                className={mode === "home" ? "active" : ""}
                onClick={() => setMode("home")}
            >
                Home
            </span>

            <span
                className={mode === "away" ? "active" : ""}
                onClick={() => setMode("away")}
            >
                Away
            </span>
        </div>
    );
}