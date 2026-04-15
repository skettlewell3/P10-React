import { useState, useRef, useEffect } from "react";

export default function ProfileDropdown({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const toggleMenu = () => setOpen(prev => !prev);

  const handleLogout = () => {
    const confirmLogout = window.confirm(`Logout ${user?.name}`);
    if (confirmLogout) onLogout(user);
  };

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div id="appDropdown" ref={ref}>
      <button id="dropdownToggle" onClick={toggleMenu}>
        <img src="/assets/logos/FullLogo_Transparent_smallr.png" />
      </button>

      {open && (
        <div className="dropdownMenu left">
          <div className="dropdownItem disabled">
            Account <span className="tag">Soon!</span>
          </div>
          <div className="dropdownItem disabled">
            Create Club <span className="tag">Soon!</span>
          </div>
          <div className="dropdownItem disabled">
            Join Club <span className="tag">Soon!</span>
          </div>
          <div className="dropdownItem disabled">
            Rules <span className="tag">Soon!</span>
          </div>
          <div 
            className="dropdownItem logout"
            onClick={handleLogout}
          >
            Log Out
          </div>
        </div>
      )}
    </div>
  );
}