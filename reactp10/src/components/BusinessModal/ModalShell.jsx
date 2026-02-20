import { createPortal } from 'react-dom';
import { useState } from 'react'
import ModalCardHeader from './ModalCardHeader';
import ModalToggle from './ModalToggle';

export default function ModalShell({
    isOpen,
    onClose, 
    children,
    showToggle = false,
    toggleOptions = [],
    defaultModal = null
}) {
    const [activeModal, setActiveModal] = useState(defaultModal);

    if (!isOpen) return null;

    return createPortal(
        <>
            <div id="modalCard">
                <div className="modalCardHeader">
                    <ModalCardHeader
                        closeModal={onClose}
                    />

                    {showToggle && (
                        <ModalToggle
                            options={toggleOptions}
                            activeModal={activeModal}
                            setActiveModal={setActiveModal}
                        />
                    )}

                </div>

                <div className="modalCardContent">
                    {children(activeModal)}
                </div>
            </div>
        </>
    )
}