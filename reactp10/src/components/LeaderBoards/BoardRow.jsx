import { useState } from 'react'
import ModalShell from '../BusinessModal/ModalShell';
import StatsContent from '../BusinessModal/StatsContent';
import BusinessContent from '../BusinessModal/BusinessContent';

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
        points,
        id
    } = subject;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const businessKey = name.trim().toUpperCase();
    const hasBusiness = isTeam && businessData?.[businessKey] !== undefined;

    const handleOpenModal = () => setIsModalOpen(true);  


    return (
        <>
        <fieldset 
            className={`boardAlign boardRow ${
                pos === 1 ? "first" : 
                pos === 2 ? "second" : 
                pos === 3 ? "third" : "" 
        }`}        
        >
            <div className="pos">{pos}</div>

            <div 
                className="userName clickable"
                onClick={handleOpenModal}
            >
                {name}
                {hasBusiness && (
                    <span className="infoIcon">ⓘ</span>
                )}
            </div>

            <div className={`p10s ${p10s > 0 ? "hasP10s" : ""}`}>
                {p10s}
            </div>
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