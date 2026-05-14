import HoFRank from "./HoFRank"

export default function HoFGwWinsCard({ data, rank }) {
    

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
                        <span>{`${data.total_points}pts`}</span>
                    </div>
                    <div className="hofMetaLine">
                        <span>{`win rate: ${data.win_rate}%`}</span>
                        
                    </div>
                </div>
            </div>
            <div className="hofRowSection hofRowSectionFocus">
                <div className="hofStat hofFocus">{data.gws_won}</div>
                <div className="hofStat hofSupporting">
                    <span className="supportingLabel">GP :</span>
                    <span>{data.gws_played}</span>                     
                </div>
            </div>
        </div>
    )

}