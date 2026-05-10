import { useHoF } from "../../hooks/useHoF";
import MenuTitleContainer from "./MenuTitleContainer";
import HoFOverviewCard from "./HoFCards/HoFOverviewCard";
import { categoryConfig } from "../../config";

export default function HallOfFame() {
    const { hallOfFame, hofLoading } = useHoF();

    return (
        <div className="hofPage">

            <MenuTitleContainer title="Hall of Fame" />

            <section className="hofGallery">
                <div className="hofColumn hofUser">

                    {Object.entries(categoryConfig).map(([key]) => (

                        <HoFOverviewCard
                            key={key}
                            category={key}
                            data={
                                hallOfFame[key]?.[0]
                            }
                        />
                    ))}

                </div>
                <div className="hofColumn hofClub">
                    {Object.entries(categoryConfig).map(([key]) => (

                        <HoFOverviewCard
                            key={key}
                            category={key}
                            data={
                                hallOfFame[key]?.[0]
                            }
                        />
                    ))}
                </div>
            </section>

        </div>
    )
}