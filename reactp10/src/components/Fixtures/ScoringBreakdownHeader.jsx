export default function ScoringBreakdownHeader({ activeTab }) {
    return (
        <div className="scoringBreakdownHeader">
          <div>{activeTab ==="club" ? "Club" : "User"}</div>
          <div>Pred</div>
          <div>R</div>
          <div>GD</div>
          <div>H</div>
          <div>A</div>
          <div>G</div>
          <div>Pts</div>
        </div>
    )
}