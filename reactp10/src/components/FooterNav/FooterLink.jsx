export default function FooterLink({ label, icon, id, activeView, setActiveView }) {
  const className = `footerItem ${activeView.toLowerCase() === label.toLowerCase() ? " footerFocal" : ""}`;
    return (
    <button
      id={id}
      className={className}
      onClick={() => setActiveView(label.toLowerCase())} // map label to state key
    >
      <img src={icon} alt={label} className="icon" />
      {label}
    </button>
  );
}