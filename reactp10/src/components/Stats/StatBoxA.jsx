export function StatBoxA({ title, value, percent, gw }) {

    let display;

    if (gw != null) {
        display = `GW${gw}`;
    } else if (percent != null) {
        display = `${Number(percent).toFixed(1)}%`
    } else {
        display = "-";
    }

    return (
        <div className="statBox StatBoxA">
            <div className="statBoxLabel labelA">
                {title}
            </div>

            <div className="statBoxRow">
                <div className="statBoxValue">
                    {value}
                </div>

                <div className="StatBoxDivider"/>

                <div className="statBoxPercent">
                    {display}
                </div>                
            </div>
        </div>
    );
}