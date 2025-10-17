import { useEffect, useState } from 'react'
import BoardRow from './BoardRow'

export default function BoardBody ( {gameweek, activeLens, subjectType, businessData}) {

    const [boardData, setBoardData] = useState([]);

    useEffect(() => {
        fetch('/data/boardData.json')
        .then((res) => res.json())
        .then((data) => {
            const weekData = data[String(gameweek)];
            if (weekData && weekData[subjectType] && weekData[subjectType][activeLens]) {
                setBoardData(data[String(gameweek)][subjectType][activeLens] || []);
            } else {
                setBoardData([]);
            }
        })
        .catch((err) => console.log("Failed to load leaderboards", err));
    }, [gameweek, activeLens, subjectType]);

    return (
        <div id="boardData">
            {boardData.length === 0 ? (
                <p id="boardErr">Leaderboards are not currently available</p>
            ) : subjectType === "user" ? (
                boardData.map((subject, idx) => (
                    <BoardRow 
                        key={idx}
                        subject={subject}
                    />          
                ))         
            ) : (
                boardData.map((subject, idx) => (
                    <BoardRow 
                        key={idx}
                        subject={subject}
                        businessData={businessData}
                        isTeam={true}
                    />  
                ))
            )}
        </div>
    )
}