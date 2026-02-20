import PlayerCardModal from "../HeaderProfile/PlayerCardModal";

export default function ModalCardHeader({ closeModal, subject, isTeam }){
    return (
        <div class="modalHeader">
            <PlayerCardModal 
                subject={subject}
                isTeam={isTeam}
            />
            <img 
                src="/assets/logos/FullLogo_Transparent_NoBuffer.png" 
                alt="logo" 
                className="p10ModalLogo"
                aria-label="close" 
                onClick={closeModal} 
            />
        </div>
    )
}