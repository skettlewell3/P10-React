export default function HoFRank({ rank }) {
    const medalClass = 
        rank === 1
            ? "goldMedal"
            : rank === 2 
                ? "silverMedal"
                : rank === 3
                    ? "bronzeMedal"
                    : null 
    ;

    return (
        <div 
            className={
                medalClass  
                    ? `hofMedal ${medalClass}`
                    : "hofRank"
            }
        >
            {rank}
        </div>
    );
}