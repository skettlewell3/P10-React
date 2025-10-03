export default function FooterCenter({ label, icon, id, activeView, setActiveView }) {
  const className = `footerCenter ${activeView.toLowerCase() === label.toLowerCase() ? " footerFocal" : ""}`;
    return (
    <button
      id={id}
      className={className}
      onClick={() => setActiveView(label.toLowerCase())}
    >
      {label}
      <img src={icon} alt={label} className="icon" />
    </button>
  );
}