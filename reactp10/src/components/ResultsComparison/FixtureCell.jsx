export default function FixtureCell({ hGoals, aGoals, metaData, className }) {
    return (
        <div className={`fixtureCell ${className || ""}`}>
            <div className="resultCell">
                {hGoals}-{aGoals}
            </div>
            <div className="metaCell">
                {metaData}
            </div>
        </div>
    )
}

