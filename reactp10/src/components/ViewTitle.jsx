export default function ViewTitle({ title }) {
    return (
        <div id="viewTitle">
            {String(title).toUpperCase()}
        </div>
    )
}