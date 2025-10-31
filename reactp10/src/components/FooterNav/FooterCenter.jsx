import { NavLink, useLocation } from "react-router-dom";

export default function FooterCenter({ label, icon, to, handleSubmit }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      className={`footerCenter ${isActive ? "footerFocal" : ""}`.trim()}
      onClick={(e) => {
        if (isActive && handleSubmit) {
          e.preventDefault(); // don’t navigate, just submit
          handleSubmit(e);
        }
      }}
    >
      <img src={icon} alt={label} className="icon" />
      {isActive ? "Submit" : label}
    </NavLink>
  );
}

