export default function HoursSection({ hours }) {
    return (
        <div id="modalTimes">
            <table id="openingTimesTable">
                {Object.entries(hours).map(([day, time]) => {
                    <tr key={day}>
                        <td>(day.charAt(0).toUpperCase() + day.slice(1))</td>
                        <td class="timeValue" id="modalMon">{time}</td>
                    </tr>
                })}
            </table>
        </div>
    );
}