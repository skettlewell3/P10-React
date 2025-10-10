export default function LensSelect ( {activeLens, setActiveLens} ) {
    const handleChange = (e) => {
        setActiveLens(e.target.value)
    }

    return (
        <select 
            id="lensSelect"
            value={activeLens}
            onChange={handleChange}
        >
            <option value="week">
                WEEK
            </option>
            <option value="season">
                SEASON
            </option>
        </select>
    )
}