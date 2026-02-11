export function StatBoxA({ title, value, percent }) {

    const formattedPercent =
        percent != null ? `${Number(percent).toFixed(1)}%` : "0%"
    ;

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
                    {formattedPercent}
                </div>                
            </div>
        </div>
    );
}