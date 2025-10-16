import { useState } from 'react'
import BusinessModal from '../BusinessModal/BusinessModal'

export default function BoardRow({ subject, businessData, isTeam }) {
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
    } = subject;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const hasBusiness = 
        isTeam && businessData?.[name.trim().toUpperCase()] !== undefined;

    const handleOpenModal = () => {
        if (hasBusiness) setIsModalOpen(true);
    };

    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
        <fieldset 
            className={`boardAlign boardRow ${
            pos === 1 ? "first" : pos === 2 ? "second" : pos === 3 ? "third" : "" 
        }`}        
        >
            <div className="pos">{pos}</div>

            <div 
                className={`userName ${hasBusiness ? "Clickable" : ""}`}
                onClick={handleOpenModal}
            >
                {name}
                {hasBusiness && <span className="infoIcon">ⓘ</span>}
            </div>
            <div className={`p10s ${p10s > 0 ? "hasP10s" : ""}`}>{p10s}</div>
            <div className="rCorrect">{rCorrect}</div>
            <div className="gdCorrect">{gdCorrect}</div>
            <div className="hCorrect">{hCorrect}</div>
            <div className="aCorrect">{aCorrect}</div>
            <div className="gCorrect">{gCorrect}</div>
            <div className="points">{points}</div>
        </fieldset>

        {isModalOpen && (
            <div id="teamModalOverlay" onClick={handleCloseModal}>
                <div
                    id="teamModalWrapper"
                    onClick={(e) => e.stopPropagation()}
                >
                    <BusinessModal 
                        Business={businessData[name.trim().toUpperCase()]}
                        handleCloseModal={handleCloseModal}
                    />
                </div>

            </div>
        )}
        </>
    )
}