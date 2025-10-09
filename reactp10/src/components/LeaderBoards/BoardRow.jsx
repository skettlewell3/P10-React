export default function BoardRow( {subject} ) {
    const {
        pos, 
        name, 
        p10s, 
        rCorrect, 
        gdCorrect, 
        hCorrect, 
        aCorrect, 
        gCorrect, 
        points
    } = subject

    return (
        <>
        <fieldset className={`boardAlign boardRow ${
            pos === 1 ? "first" : pos === 2 ? "second" : pos === 3 ? "third" : "" 
        }`}        
        >
            <div className="pos">{pos}</div>
            <div className="userName">{name}</div>
            <div className={`p10s ${p10s > 0 ? "hasP10s" : ""}`}>{p10s}</div>
            <div className="rCorrect">{rCorrect}</div>
            <div className="gdCorrect">{gdCorrect}</div>
            <div className="hCorrect">{hCorrect}</div>
            <div className="aCorrect">{aCorrect}</div>
            <div className="gCorrect">{gCorrect}</div>
            <div className="points">{points}</div>
        </fieldset>
        </>
    )
}