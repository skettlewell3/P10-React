export function StatBoxB({ 
    leftLabel, 
    leftValue,
    rightLabel,
    rightValue
}) {
    return (
        <div className="statBox StatBoxB">
            <div className="statBoxLabel LabelB">
                <span>{leftLabel}</span>                
                <span>{rightLabel}</span>
            </div>

            <div className="statBoxRow">
                <div className="statBoxValue">
                    {leftValue}
                </div>

                <div className="StatBoxDividerB"/>

                <div className="statBoxValue">
                    {rightValue}
                </div>                
            </div>
        </div>
    );
}