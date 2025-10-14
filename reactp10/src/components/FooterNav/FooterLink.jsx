export default function FooterLink({ 
  label, 
  icon, 
  id, 
  activeView, 
  setActiveView, 
  disabled = false 
}) {

  const isActive = activeView.toLowerCase() === label.toLowerCase;
  
  const handleClick = () => {
    if (disabled) return;
    setActiveView(label.toLowerCase());
  }

  const className = `
    footerItem 
    ${isActive ? "footerFocal" : ""}
    ${disabled ? "footerDisabled" : ""}
    `.trim();

    return (
    <button
      id={id}
      className={className}
      onClick={handleClick} 
      disabled={disabled}
    >
      <img src={icon} alt={label} className="icon" />
      {label}
    </button>
  );
}