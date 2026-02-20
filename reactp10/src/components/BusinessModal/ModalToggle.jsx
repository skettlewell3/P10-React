export default function ModalToggle({ options, activeModal, setActiveModal }) {
    if (!options || options.length <= 1) return null;

    const activeIndex = options.indexOf(activeModal);

    const highlightWidth = 60; // match CSS

    const translateLeft = activeIndex === 1 ? 100 - highlightWidth : 0;

    return (
        <div className="modalToggle">
            <div 
                className="modalToggleHighlight"
                style={{ left: `${translateLeft}%` }}
            />

            {options.map(option => (
                <div 
                    key={option}
                    className={`modalToggleBtn ${
                        activeModal === option ? "active" : ""
                    }`}                        
                    onClick={() => setActiveModal(option)}
                >
                    {option}
                </div>
            ))}
        </div>
    );
}