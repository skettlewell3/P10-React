export default function LogoSection({ logo, alt, title }) {
    return (
        <div className="modalSection">
            <div id="modalImageContainer">
                <img className="modalImg" id="modalLogo" alt={alt} src={logo}/>
            </div>        
            <h3 id="modalTitle">{title}</h3>
        </div>
    )
}