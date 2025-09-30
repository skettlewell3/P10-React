export default function ContactSection({ email, tel, web }) {
    return (
        <div id="modalContact">
            <a id="modalWeb" href={web} target="_blank" rel="noopener">Visit Website</a>
            <p id="modalTel">{tel}</p>
            <a id="modalEmail" href={`mailto:${email}`}>Send Email</a>
        </div>
    )
}