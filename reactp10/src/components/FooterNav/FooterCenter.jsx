import { NavLink, useLocation } from "react-router-dom";
import { useGameweek } from '../../hooks/useGameweeks'

export default function FooterCenter({ label, icon, to, handleSubmit }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const { currentGwStatus } = useGameweek();

  const buttonLabel =
    currentGwStatus === "submissionsOpen"
      ? isActive
        ? "Submit"
        : label
      : "Live";

  return (
    <NavLink
      to={to}
      className={`footerCenter ${isActive ? "footerFocal" : ""}`.trim()}
      onClick={(e) => {
        if (
          isActive && 
          handleSubmit &&
          currentGwStatus === "submissionsOpen"
        ) {
          e.preventDefault(); 
          handleSubmit(e);
        }
      }}
    >
      <img src={icon} alt={label} className="icon" />
      {buttonLabel}
    </NavLink>
  );
}

