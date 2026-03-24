export default function MatchNav({ 
    currentFixture, 
    goPrev, 
    goNext,
    hasPrev,
    hasNext
}) {
    return (
        <div className="matchNav">
            <button
              className="navArrow"
              onClick={goPrev}
              disabled={!hasPrev}
            >
              ←
            </button>
            <div className="matchNavFixture">
                <span>{currentFixture.home_team}</span>
                <span>v</span>
                <span>{currentFixture.away_team}</span>
            </div>
            <button
              className="navArrow"
              onClick={goNext}
              disabled={!hasNext}
            >
              →
            </button>
        </div>
    )
}