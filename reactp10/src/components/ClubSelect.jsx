export default function ClubSelect ({ highlightedClub, setHighlightedClub, clubs }) {

    const handleChange = (e) => {
        setHighlightedClub(e.target.value)
    }

    return (
        <select 
            id="lensSelect"
            value={highlightedClub}
            onChange={handleChange}
        >
            {clubs.map((club) => (
                <option key={club.club_id} value={club.club_id}>
                    {club.name}
                </option>
            ))}            
        </select>
    )
}