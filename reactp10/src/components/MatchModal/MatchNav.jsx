export default function MatchNav({ 
    currentFixture, 
    goPrev, 
    goNext,
    hasPrev,
    hasNext
}) {
    return (
        <div className="matchNav">
            <div
              className="navArrow"
              onClick={goPrev}
              disabled={!hasPrev}
            >
              ←
            </div>
            <div className="matchNavFixture">
                <span>{currentFixture.home_team}</span>
                <span>v</span>
                <span>{currentFixture.away_team}</span>
            </div>
            <div
              className="navArrow"
              onClick={goNext}
              disabled={!hasNext}
            >
              →
            </div>
        </div>
    )
}