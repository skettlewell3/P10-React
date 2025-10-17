export default function HoursSection( { hours } ) {
    return (
        <div id="modalTimes">
            <table id="openingTimesTable">
                <tbody>
                    {Object.entries(hours).map(([day, time]) => (
                        <tr key={day}>
                            <td>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
                            <td className="timeValue">{time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}