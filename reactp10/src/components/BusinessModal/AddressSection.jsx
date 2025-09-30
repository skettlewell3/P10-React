export default function AddressSection({ address }) {
    return (
        <div id="modalAddress">
            <span id="modalAddress1">{address.line1}</span>
            <span id="modalAddress2">{address.line2}</span>
            <span id="modalAddress3">{address.line3}</span>
        </div>
    )
};