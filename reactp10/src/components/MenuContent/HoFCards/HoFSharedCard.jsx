import HoFRank from "./HoFRank";
import { categoryConfig, seasonMetaConfig } from "../../../config";

export default function HoFSharedCard({ data, focus, rank, meta }) {

    const config = categoryConfig[focus];

    const focusData = config.primaryStat(data);
    const supportData = config.secondaryStat(data);

    const metaData = meta === "season"
        ? seasonMetaConfig[focus]
        : null;

    const line1 = metaData?.line1 ?? [];
    const line2 = metaData?.line2 ?? [];
 

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

            {meta === "season" && (
                <div className="hofRowSection hofRowSectionMeta">
                    <div className="hofName">{data.name}</div>
                    <div className="hofMetaContainer">
                        <div className="hofMetaLine">
                          {line1.map(item => (
                            <span key={item.field}>
                              {item.label}: {
                                item.format 
                                    ? item.format(data[item.field])
                                    : data[item.field]
                                }
                            </span>
                          ))}
                        </div>
                      
                        <div className="hofMetaLine">
                          {line2.map(item => (
                            <span key={item.field}>
                              {item.label}: {
                                item.format 
                                    ? item.format(data[item.field])
                                    : data[item.field]
                                }
                            </span>
                          ))}
                        </div>
                    </div>
                </div>
            )}

            {meta !== "season" && (
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
            )}
                


            <div className="hofRowSection hofRowSectionFocus">
                <div className={`hofStat hofFocus ${meta === "season" ? "hofSeason" : null}`}>{focusData}</div>
                <div className={`hofStat hofSupporting ${meta === "season" ? "hofSeason" : null}`}>
                    <span className="supportingLabel">{config.secondaryLabel}</span>
                    <span>{supportData}</span>                    
                </div>
            </div>
        </div>
    )

}