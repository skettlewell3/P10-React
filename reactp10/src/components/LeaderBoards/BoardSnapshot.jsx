import BoardContainer from './BoardContainer'
import BoardHeader from './BoardHeader'
import BoardSnapshotBody from './BoardSnapshotBody'

export default function BoardSnapshot({ gameweek, subjectType }) {

    return (
        <BoardContainer>
            <BoardHeader subjectType={subjectType} />
            <BoardSnapshotBody 
                gameweek={gameweek}
                subjectType={subjectType}
            />
        </BoardContainer>
    )
}