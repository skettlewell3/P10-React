import { ModalCoreContainer } from "../Stats/ModalCoreContainer";

export default function StatsContent({
    subjectId,
    subjectName,
    isTeam
}) {

    const subjectType = isTeam ? "club" : "user";
    return (
        <>
            <div className="statsModalTitle">
                {subjectName}
            </div>
            <ModalCoreContainer
                subjectId={subjectId}
                subjectType={subjectType}
            />
        </>
    )

}