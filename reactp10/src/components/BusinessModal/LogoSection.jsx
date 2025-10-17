export default function LogoSection({ logo, alt }) {
    return (
        <div id="modalImageContainer">
            <img className="modalImg" id="modalLogo" alt={alt} src={logo}/>
        </div>
    )
}