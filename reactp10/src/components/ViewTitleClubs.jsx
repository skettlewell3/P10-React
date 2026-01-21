import ClubSelect from "./ClubSelect";

export default function ViewTitleClubs({ title, highlightedClub, setHighlightedClub, clubs }) {
    return (
        <div id="viewTitleBoards">
            {String(title).toUpperCase()}
            <ClubSelect 
                highlightedClub={highlightedClub}
                setHighlightedClub={setHighlightedClub}
                clubs={clubs}
            />
        </div>
    )
}