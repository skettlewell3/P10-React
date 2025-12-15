export default function ScoringBreakdownHeader({ activeSubject }) {
    return (
        <div className="scoringBreakdownHeader breakdownRow">
          <div className="breakdownName">{activeSubject ==="club" ? "Club" : "User"}</div>
          <div className="breakdownPred">Pred</div>
          <div className="breakdownResults">R</div>
          <div className="breakdownGd">GD</div>
          <div className="breakdownHome">H</div>
          <div className="breakdownAway">A</div>
          <div className="breakdownGoals">G</div>
          <div className="breakdownPoints">Pts</div>
        </div>
    )
}