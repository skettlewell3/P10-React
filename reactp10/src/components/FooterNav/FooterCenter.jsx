export default function FooterCenter({ label, icon, id, activeView, setActiveView, handleSubmit }) {
  const className = `footerCenter ${activeView.toLowerCase() === label.toLowerCase() ? " footerFocal" : ""}`;
  
  return (
    <button
      id={id}
      className={className}
      onClick={(e) => 
        activeView.toLowerCase() === label.toLowerCase()
        ? handleSubmit(e)
        : setActiveView(label.toLowerCase())
      }
    >
      {activeView.toLowerCase() === label.toLowerCase() ? "Submit" : label}
      <img src={icon} alt={label} className="icon" />
    </button>
  );
}