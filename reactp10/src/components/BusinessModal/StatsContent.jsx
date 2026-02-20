import { ModalCoreContainer } from "../Stats/ModalCoreContainer";

export default function StatsContent({
    subjectId,
    isTeam
}) {

    const subjectType = isTeam ? "club" : "user";
    return (               
        <ModalCoreContainer
            subjectId={subjectId}
            subjectType={subjectType}
        />    
    )

}