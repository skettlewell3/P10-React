export default function MenuTitleContainer({ title }) {
    return (
        <div id="menuTitle">
            {String(title).toUpperCase()}
        </div>
    )
}