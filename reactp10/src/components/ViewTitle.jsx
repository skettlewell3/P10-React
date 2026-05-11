export default function ViewTitle({ title }) {

    const catchTitle = title === "Highest Scoring Week" 
        ? "Top 10 Points"
        : title
    ;

    return (
        <div id="viewTitle">
            {String(catchTitle).toUpperCase()}
        </div>
    )
}