import { NavLink } from "react-router-dom";

export default function FooterLink({ label, icon, to, disabled = false }) {
  return (
    <NavLink
      to={disabled ? "#" : to}
      className={({ isActive }) =>
        `footerItem ${isActive ? "footerFocal" : ""} ${disabled ? "footerDisabled" : ""}`.trim()
      }
    >
      <img src={icon} alt={label} className="icon" />
      {label}
    </NavLink>
  );
}
