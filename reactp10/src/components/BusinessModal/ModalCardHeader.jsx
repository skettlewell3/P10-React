export default function ModalCardHeader({ closeModal }){
    return (
        <div id="modalHeader">
            <img src="/assets/logos/FullLogo_Transparent_NoBuffer.png" alt="logo" className="p10ModalLogo" />
            <button id="teamModalClose" aria-label="close" onClick={closeModal}>x</button>
        </div>
    )
}