import MatchFixtureRow from "./MatchFixtureRow";

export default function MatchFixtureCard({ fixture }) {
  const statusMap = {
    upcoming: { label: 'Upcoming', color: 'amber' },
    live: { label: 'Live', color: 'green' },
    finished: { label: 'Finished', color: 'red' }
  };

  const statusMeta = statusMap[fixture.fixture_status];

  console.log("Modalfixture", fixture)

  return (
    <div className="fixturesCard matchCard">
      <div className="fixturesCardHeader">
        <div className="fcHeaderCenter">
            <div className="day">{fixture.day}</div>
            <div className="ko">{fixture.ko}</div>
        </div>

        {statusMeta && (
          <div className={`fixtureStatus ${statusMeta.color}`}>
            <span className="dot" />
            {statusMeta.label}
          </div>
        )}
      </div>

      <MatchFixtureRow fixture={fixture} />
    </div>
  );
}