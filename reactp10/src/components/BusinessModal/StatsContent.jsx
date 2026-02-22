import { ModalCoreContainer } from "../Stats/ModalCoreContainer";
import { ModalHighsContainer } from "../Stats/ModalHighsContainer";

export default function StatsContent({
    subjectId,
    isTeam
}) {

    const subjectType = isTeam ? "club" : "user";
    return (  
        <>
            <ModalCoreContainer
                subjectId={subjectId}
                subjectType={subjectType}
            />    
            <ModalHighsContainer 
                subjectId={subjectId}
                subjectType={subjectType}
            />        
        </>             
    )

}