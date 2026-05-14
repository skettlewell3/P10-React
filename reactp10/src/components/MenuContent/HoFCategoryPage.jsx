import { useParams, useNavigate } from "react-router-dom";
import { categoryConfig } from "../../config";
import { useHoF } from "../../hooks/useHoF";
import { useHoFClub } from "../../hooks/useHoFClub";
import { useHoFSeasonClub } from "../../hooks/useHoFSeasonClub";
import { useHoFSeasonUser } from "../../hooks/useHoFSeasonUser";

import HoFSharedCard from "./HoFCards/HoFSharedCard";
import HoFHighScoreCard from "./HoFCards/HoFHighScoreCard";
import HoFGwWinsCard from "./HoFCards/HoFGwWinsCard";
import ViewTitle from "../ViewTitle";

export default function HoFCategoryPage({}) {
    const navigate = useNavigate();
    const { subject, category } = useParams();
    const { hallOfFame } = useHoF();
    const { clubHallOfFame} = useHoFClub();
    const { hofSeasonClub } = useHoFSeasonClub();
    const { hofSeasonUser} = useHoFSeasonUser();

    const isSeasonCategory = category.startsWith("season");

    const hoFData = isSeasonCategory
        ? (
            subject === "club"
                ? hofSeasonClub 
                : hofSeasonUser
        ) : (
            subject === "club"
                ? clubHallOfFame
                : hallOfFame
        )
    ;

    const config = categoryConfig[category];


    if (!config) {
        return <div>Invalid Category</div>;
    };

    const activeData = isSeasonCategory
        ? [...hoFData] 
            .sort(
                (a, b) => 
                    categoryConfig[category].primaryStat(b)
                    - categoryConfig[category].primaryStat(a)
            )
            .slice(0, 10)        
        : (hoFData[category] ?? []).slice(0,10);

    const cardMap = {
        highestScoringWeeks: HoFHighScoreCard,
        mostGwWins: HoFGwWinsCard,
        mostPerfect10s: HoFSharedCard,
        mostCorrectResults: HoFSharedCard,
    }

    const ActiveCard = isSeasonCategory 
        ? HoFSharedCard
        : cardMap[category]
    ;

    return (
        <div className="hofPage">
            <div className="hofCategoryHeader">
                <button 
                    className="hofBackButton"
                    onClick={() => navigate("/hof")}
                    aria-label="Go Back"
                >
                    <img src="/assets/svg/backArrow.svg" alt="Go Back" />
                </button>

                <ViewTitle title={config.title} />
            </div>
            <div className="hofBoardBody">
                {activeData.map((entry, index) => (
                    <ActiveCard
                        key={`${entry.user_id || entry.club_id}-${index}`}
                        data={entry}
                        rank={index + 1}
                        focus={category}
                        meta={isSeasonCategory ? "season" : null}
                    />
                ))}
            </div>
        </div>
    );
}