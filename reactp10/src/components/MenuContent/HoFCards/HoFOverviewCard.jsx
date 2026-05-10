import { useNavigate } from "react-router-dom";
import { categoryConfig } from "../../../config";

export default function HoFOverviewCard({ data, category }) {

    const navigate = useNavigate();

    const config = categoryConfig[category];

    if (!data || !categoryConfig[category]) return null;

    const primaryStat = config.primaryStat(data);

    const secondaryStat = config.secondaryStat(data);

    console.log("category:", category);

    return (
        <div 
            className="hofOverviewCard"
            onClick={() => {
                console.log("navigate:", `/hof/${category}` ),
                navigate(`/hof/${category}`)
            }}
        >
            <h4 className="hofOverviewTitle">
                {config.title}
            </h4>

            <div className="hofOverviewName">
                {data.name}
            </div>

            <div className="hofOverviewStats">
                <span className="hofOverviewStat">
                    {primaryStat} {config.primaryLabel}
                </span>
                <span className="hofOverviewStat">
                    {secondaryStat} {config.secondaryLabel}
                </span>
            </div>

        </div>
    )
}