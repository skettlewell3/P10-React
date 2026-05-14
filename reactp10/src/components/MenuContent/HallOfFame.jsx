import { useHoF } from "../../hooks/useHoF";
import MenuTitleContainer from "./MenuTitleContainer";
import HoFOverviewCard from "./HoFCards/HoFOverviewCard";
import { categoryConfig } from "../../config";
import { useHoFClub } from "../../hooks/useHoFClub";
import { useHoFSeasonClub } from "../../hooks/useHoFSeasonClub"
import { useHoFSeasonUser } from "../../hooks/useHoFSeasonUser"

export default function HallOfFame() {
    const { hallOfFame, hofLoading } = useHoF();
    const { clubHallOfFame, clubHofLoading } = useHoFClub();
    const { hofSeasonUser, hofSeasonUserLoading } = useHoFSeasonUser();
    const { hofSeasonClub, hofSeasonClubLoading } = useHoFSeasonClub();

    const weeklyCategories = Object.entries(categoryConfig)
        .filter(([key]) => !key.startsWith("season"))
    ;

    const seasonCategories = Object.entries(categoryConfig)
        .filter(([key]) => key.startsWith("season"))
    ;

    return (
        <div className="hofPage">

            <MenuTitleContainer title="Hall of Fame" />

            <section className="hofGallery">
                <div className="hofGalleryHeader">
                    Weekly Records - 25/26
                </div>
                <div className="hofGalleryBody">

                    <div className="hofColumn hofUser">

                        {weeklyCategories.map(([key]) => (

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
                        {weeklyCategories.map(([key]) => (

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
                </div>
            </section>

            <section className="hofGallery">
                <div className="hofGalleryHeader">
                    Season Records - 25/26
                </div>
                <div className="hofGalleryBody">

                    <div className="hofColumn hofUser">

                        {seasonCategories.map(([key]) => (

                            <HoFOverviewCard
                                key={key}
                                category={key}
                                data={
                                    [...hofSeasonUser]
                                        .sort(
                                            (a, b) =>
                                                categoryConfig[key].primaryStat(b)
                                                - categoryConfig[key].primaryStat(a)
                                        )[0]
                                }
                                subject="user"
                            />
                        ))}

                    </div>
                    <div className="hofColumn hofClub">
                        {seasonCategories.map(([key]) => (

                            <HoFOverviewCard
                                key={key}
                                category={key}
                                data={
                                    [...hofSeasonClub]
                                        .sort(
                                            (a, b) =>
                                                categoryConfig[key].primaryStat(b)
                                                - categoryConfig[key].primaryStat(a)
                                        )[0]
                                }
                                subject="club"
                            />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}