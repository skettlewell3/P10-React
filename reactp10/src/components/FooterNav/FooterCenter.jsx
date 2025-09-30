export default function FooterCenter({ label, icon, id, activeView, setActiveView }) {
  const className = `footerCenter ${activeView === label ? " footerFocal" : ""}`;
    return (
    <button
      id={id}
      className={className}
      onClick={() => setActiveView(label.toLowerCase())} // map label to state key
    >
      {label}
      <img src={icon} alt={label} className="icon" />
    </button>
  );
}