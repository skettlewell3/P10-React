import { useState } from 'react'
import ModalCardHeader from '../BusinessModal/ModalCardHeader'
import ModalToggle from '../BusinessModal/ModalToggle'
import StatsContent from './StatsContent'
import BusinessContent from './BusinessContent'

export default function LeaderboardModal({
    subject,
    businessData,
    isTeam,
    handleCloseModal
}) {
    const [activeModal, setActiveModal] = useState("Stats")

    const toggleOptions = businessData
        ? ["Stats", "Business"]
        : ["Stats"]

    const showToggle = toggleOptions.length > 1

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