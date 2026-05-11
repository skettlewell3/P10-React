import { useParams, useNavigate } from "react-router-dom";
import { useHoF } from "../../hooks/useHoF";
import { useHoFClub } from "../../hooks/useHoFClub";
import { categoryConfig } from "../../config";

import HoFSharedCard from "./HoFCards/HoFSharedCard";
import HoFHighScoreCard from "./HoFCards/HoFHighScoreCard";
import HoFGwWinsCard from "./HoFCards/HoFGwWinsCard";
import ViewTitle from "../ViewTitle";

export default function HoFCategoryPage({}) {
    const navigate = useNavigate();
    const { subject, category } = useParams();
    const { hallOfFame } = useHoF();
    const { clubHallOfFame} = useHoFClub();

    const hoFData = 
        subject === "club"
            ? clubHallOfFame
            : hallOfFame;

    const config = categoryConfig[category];


    if (!config) {
        return <div>Invalid Category</div>;
    };

    const activeData = hoFData[category] ?? [];

    const cardMap = {
        highestScoringWeeks: HoFHighScoreCard,
        mostGwWins: HoFGwWinsCard,
        mostPerfect10s: HoFSharedCard,
        mostCorrectResults: HoFSharedCard,
    }

    const ActiveCard = cardMap[category];

    console.log("category:", category);
    console.log("config:", config);
    console.log("hallOfFame:", hallOfFame);

    return (
        <div className="hofPage">
            <div className="hofCategoryHeader">
                <button 
                    onClick={() => navigate("/hof")}
                >
                    back
                </button>

                <ViewTitle title={config.title} />
            </div>
            <div className="hofBoardBody">
                {activeData.map((entry, index) => (
                    <ActiveCard
                        key={`${entry.user_id}-${index}`}
                        data={entry}
                        rank={index + 1}
                        focus={category}
                    />
                ))}
            </div>
        </div>
    );
}