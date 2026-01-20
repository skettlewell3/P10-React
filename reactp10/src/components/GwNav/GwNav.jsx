import { useGameweek } from "../../hooks/useGameweeks"

export default function GwNav( {activeWeek, setActiveWeek, allowCurrentWeek} ) {
    const { currentWeek, currentGwStatus } = useGameweek();

    const handlePrevWeek = () => {
        setActiveWeek(activeWeek => activeWeek - 1);
    }

    const handleNextWeek = () => {
        setActiveWeek(activeWeek => activeWeek + 1);
    }

    const maxWeek = allowCurrentWeek && currentGwStatus === "live"
    ? currentWeek
    : currentWeek - 1;

    return (
        <div id="weekNav">
            <button 
                id="prevWeek" 
                className="nav-arrow"
                onClick={handlePrevWeek}   
                disabled={activeWeek <= 1}         
            >
                <svg viewBox="0 0 24 24" className="arrow-icon" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <span id="gwDisplay">GAMEWEEK {activeWeek}</span>

            <button 
                id="nextWeek" 
                className="nav-arrow"
                onClick={handleNextWeek}
                disabled={activeWeek >= maxWeek                }
            >
                <svg viewBox="0 0 24 24" className="arrow-icon" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    )
}