import { ruleSections } from "../../constants/rules";
import MenuTitleContainer from "./MenuTitleContainer";
import PointsSnapshot from "./PointsSnapshot";

export default function Rules() {
  return (
    <div id="rulesPage">
      <MenuTitleContainer title="Rules" />

      {ruleSections.map((section, index) => (
        <section 
            className={`rulesSection ${index % 2 === 0 ? "left" : "right"}`} 
            key={section.id}
        >
          <h3>
            {index % 2 === 0 ? (
              <>
                <span className="titleIcon">{section.icon}</span>
                <span>{section.title}</span>
              </>
            ) : (
              <>
                <span>{section.title}</span>
                <span className="titleIcon">{section.icon}</span>
              </>
            )}
          </h3>

          <ul>
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {section.hasTable && (
            <PointsSnapshot />
          )}

          {section.breakdown && (
            <ul>
              {section.breakdown.map((item, i) => (
                <li className="rulesBreakdown" key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.tiebreakers && (
              <ul>
                <li><strong>Ranking System:</strong></li>
                    {section.tiebreakers.map((item, i) => (
                      <li className="tieBreakers" key={i}>{item}</li>
                    ))}
              </ul>
            )}
        </section>
      ))}
    </div>
  );
}