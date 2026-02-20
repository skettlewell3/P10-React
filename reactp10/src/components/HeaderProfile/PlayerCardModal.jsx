import { useSearchAnyRanking } from "../../hooks/useSearchAnyRanking";

export default function PlayerCardModal({ subject, isTeam }) {
   
    const { loading, overallScore, overallRanking} = useSearchAnyRanking({
        id: subject.id, 
        isTeam
    });

    const name = subject.name;


    return (
        <div id="playerCardTitleModal">
            <div id="playerCardScore">⭐:{overallScore}</div>
            <div id="playerCardName">{loading ? "Loading" : name}</div>
            <div id="playerCardRanking">#{overallRanking}</div>
        </div>
    )
}