import { useEffect, useState } from 'react'
import BoardRow from './BoardRow'

export default function BoardBody ( {gameweek, activeLens, subjectType}) {

    const [boardData, setBoardData] = useState([]);

useEffect(() => {
    fetch('/data/boardData.json')
    .then((res) => res.json())
    .then((data) => {
        setBoardData(data[String(gameweek)][subjectType][activeLens] || [])
    })
    .catch((err) => console.log("Failed to load leaderboards", err));
}, [gameweek, activeLens, subjectType]);

    return (
        <div id="boardData">
            {boardData.map((subject, idx) =>
            <BoardRow 
                key={idx}
                subject={subject}
            />            
            )}

        </div>
    )
}