export default function SubjectSelectSVG({ subjectType, setSubjectType }) {
    const handleToggle = () => {
        setSubjectType(subjectType === "user" ? "team" : "user");
    }
        
  return (
    <button
      id="subjectSelectSVG"
      onClick={handleToggle}
      className=""
    >
      {subjectType === "user" ? (
        <img
          src="/assets/svg/user.svg"
          alt="User View"
          className="selectSVG"
        />
      ) : (
        <img
          src="/assets/svg/team.svg"
          alt="Team View"
          className="selectSVG"
        />
      )}
    </button>
  );
}
