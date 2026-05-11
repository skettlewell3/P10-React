import HoFRank from "./HoFRank";

export default function HoFSharedCard({ data, focus, rank }) {

    const focusMap = {
        mostPerfect10s: data.perfect_10s,
        mostCorrectResults: data.correct_results
    };

    const supportMap = {
        mostPerfect10s: data.correct_results,
        mostCorrectResults: data.perfect_10s
    };

    const focusData = focusMap[focus];
    const supportData = supportMap[focus];    

    return (
        <div 
            className={`hofRow hofRowGwwins ${rank === 1 
                ? 'firstHoF' 
                : rank === 2 ? 'secondHoF' 
                : rank === 3 ? 'thirdHoF' 
                : 'rest'}`
            }
        >
            <div className="hofRowSection hofRowRanking">
                <HoFRank rank={rank}/>
            </div>

            <div className="hofRowSection hofRowSectionMeta">
                <div className="hofName">{data.name}</div>
                <div className="hofMetaContainer">
                    <div className="hofMetaLine">
                        <span>{`GW: ${data.gameweek_id}`}</span>
                        <span>{`avg: ${data.avg_gw_score}pts`}</span>
                    </div>
                    <div className="hofMetaLine">
                        <span>{`RANK: ${data.rank_position}`}</span>
                        <span>{`- ${data.total_points} pts -`}</span>
                    </div>
                </div>
            </div>
            <div className="hofRowSection hofRowSectionFocus">
                <div className="hofStat hofFocus">{focusData}</div>
                <div className="hofStat hofSupporting">{supportData}</div>
            </div>
        </div>
    )

}