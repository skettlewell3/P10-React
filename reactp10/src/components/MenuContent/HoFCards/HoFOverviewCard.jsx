import { useNavigate } from "react-router-dom";
import { categoryConfig } from "../../../config";

export default function HoFOverviewCard({ data, category, subject }) {

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
                console.log("navigate:", `/hof/${subject}/${category}` ),
                navigate(`/hof/${subject}/${category}`)
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
                    {primaryStat} <br /> {config.primaryLabel}
                </span>
                <span className="hofOverviewStat">
                    {secondaryStat} <br />  {config.secondaryLabel}
                </span>
            </div>

        </div>
    )
}