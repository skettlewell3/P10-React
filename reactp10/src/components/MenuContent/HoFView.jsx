import { useState } from "react";
import MenuTitleContainer from "./MenuTitleContainer";
import { useHoF } from "../../hooks/useHoF";
import HoFSharedCard from "./HoFCards/HoFSharedCard";
import HoFHighScoreCard from "./HoFCards/HoFHighScoreCard";
import HoFGwWinsCard from "./HoFCards/HoFGwWinsCard";

export default function HoFView() {
    const { hallOfFame, hoFLoading} = useHoF();
    const [selectedCategory, setSelectedCategory] = useState("highestScoringWeeks");

    const activeData = hallOfFame[selectedCategory] ?? [];

    const cardMap = {
        highestScoringWeeks: HoFHighScoreCard,
        mostGwWins: HoFGwWinsCard,
        mostPerfect10s: HoFSharedCard,
        mostCorrectResults: HoFSharedCard
    };

    const titleMap ={
        highestScoringWeeks: "Highest Scoring Weeks",
        mostGwWins: "Most Gameweek Wins",
        mostPerfect10s: "Most Perfect 10s",
        mostCorrectResults: "Most Correct Results"
    };

    const ActiveCard = cardMap[selectedCategory];

    return(
        <div id="hofPage">
            <MenuTitleContainer title="Hall of Fame" />

            <section id="hofBoard">
                <div id="hofBoardHeader">
                    <div id="hofBoardTitle">
                        {titleMap[selectedCategory]}
                    </div>
                </div>

                <div className="hofBoardBody">
                    {hoFLoading ? (
                        <div>Loading...</div>
                    ) : (
                        activeData.map((entry, index) => (

                            <ActiveCard 
                                key={`${entry.user_id}-${entry.gameweek_id ?? index}`}
                                data={entry}
                                rank={index+1}
                                focus={selectedCategory}
                            />
                        ))
                    )}
                    
                </div>

            </section>
        </div>
    )
}