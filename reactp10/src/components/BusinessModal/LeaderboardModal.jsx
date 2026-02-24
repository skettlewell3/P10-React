import { useState } from 'react'
import ModalCardHeader from '../BusinessModal/ModalCardHeader'
import ModalToggle from '../BusinessModal/ModalToggle'
import StatsContent from './StatsContent'
import BusinessContent from './BusinessContent'
import PredictionContent from './PredictionContent'

export default function LeaderboardModal({
    subject,
    businessData,
    isTeam,
    gameweek,
    activeLens,
    handleCloseModal
}) {
    const [activeModal, setActiveModal] = useState(
        activeLens === "week" ? "Predictions" : "Stats"
    );

    const toggleOptions = [
        activeLens === "week" ? "Predictions" : "Stats",
        ...(businessData ? ["Business"] : [])
    ];

    const showToggle = toggleOptions.length > 1

    console.log({subjectName: subject.name, activeLens, gameweek})

    return (
        <div className="teamModalCard">

            <div className="modalCardHeaderContainer">
                <ModalCardHeader
                    closeModal={handleCloseModal}
                    subject={subject}
                    isTeam={isTeam}
                />

                {showToggle && (
                    <ModalToggle
                        options={toggleOptions}
                        activeModal={activeModal}
                        setActiveModal={setActiveModal}
                    />
                )}
            </div>

            <div className="modalCardBody">
                {activeModal === "Business" && businessData ? (
                    <BusinessContent 
                        Business={businessData} 
                    />
                ) : activeModal === "Predictions" && activeLens === "week" ? (
                    <PredictionContent 
                        subjectId={subject.id}
                        subjectType={isTeam ? "club" : "user"}
                        gameweek={gameweek}
                    />
                ) : (
                    <StatsContent 
                        subjectId={subject.id} 
                        isTeam={isTeam} 
                    />
                )}
            </div>

        </div>
    )
}