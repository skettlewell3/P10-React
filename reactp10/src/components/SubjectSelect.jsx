export default function SubjectSelect( { subjectType, setSubjectType } ) {
    const handleChange = (e) => {
        setSubjectType(e.target.value)
    }

    return (
        <select 
            id="subjectSelect"
            value={subjectType}
            onChange={handleChange}
        >
            <option value="user">
                Players
            </option>
            <option value="team">
                Teams
            </option>
        </select>
    )
}