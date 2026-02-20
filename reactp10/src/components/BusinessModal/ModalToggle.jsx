export default function ModalToggle({ options, activeModal, setActiveModal }) {
    if (!options || options.length <= 1) return null;

    const activeIndex = options.indexOf(activeModal);
    const translateX = `${activeIndex * 100%}`;

    return (
        <div className="modalToggle">
            <div 
                className="modalToggleHighlight"
                style={{ transform: `translateX(${translateX})` }}
            />

            {options.map(option => (
                <button 
                    key={option}
                    className={`modalToggleBtn ${
                        activeModal === option ? "active" : ""
                    }`}                        
                    onClick={() => setActiveModal(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}