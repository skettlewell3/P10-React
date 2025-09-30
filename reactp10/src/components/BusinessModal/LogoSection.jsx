export default function LogoSection( src, alt) {
    return (
        <div id="modalImageContainer">
            <img class="modalImg" id="modalLogo" alt={alt} src={src}/>
        </div>
    )
}