import HoFRank from "./HoFRank";

export default function HoFHighScoreCard({ data, rank }) {  

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
                        <span>{`RANK: ${data.rank_position}`}</span>

                    </div>
                    <div className="hofMetaLine">
                        <span>{`avg: ${data.avg_gw_score} pts`}</span>
                        
                    </div>
                </div>
            </div>
            <div className="hofRowSection hofRowSectionFocus">
                <div className="hofStat hofFocus">{data.total_points}</div>
                <div className="hofStat hofSupporting">
                    <span className="supportingLabel">10s:</span>
                    <span>{data.perfect_10s}</span>                    
                </div>
            </div>
        </div>
    )

}