import { useHoF } from "../../hooks/useHoF";
import MenuTitleContainer from "./MenuTitleContainer";
import HoFOverviewCard from "./HoFCards/HoFOverviewCard";
import { categoryConfig } from "../../config";
import { useHoFClub } from "../../hooks/useHoFClub";

export default function HallOfFame() {
    const { hallOfFame, hofLoading } = useHoF();
    const { clubHallOfFame, clubHofLoading} = useHoFClub();

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
                            subject="user"
                        />
                    ))}

                </div>
                <div className="hofColumn hofClub">
                    {Object.entries(categoryConfig).map(([key]) => (

                        <HoFOverviewCard
                            key={key}
                            category={key}
                            data={
                                clubHallOfFame[key]?.[0]
                            }
                            subject="club"
                        />
                    ))}
                </div>
            </section>

        </div>
    )
}