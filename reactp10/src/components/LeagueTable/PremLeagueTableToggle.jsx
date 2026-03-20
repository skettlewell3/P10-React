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

            <span
                className={mode === "form5" ? "active" : ""}
                onClick={() => setMode("form5")}
            >
                Form(5)
            </span>

            <span
                className={mode === "form10" ? "active" : ""}
                onClick={() => setMode("form10")}
            >
                Form(10)
            </span>
        </div>
    );
}