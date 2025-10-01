import { useState } from "react";

export default function AppDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <div id="appDropdown" className={open ? "open" : ""}>
            <button 
                id="dropdownToggle"
                onClick={() => setOpen(!open)}
            >
                <div id="appName">PERFECT 10</div>
                <img src="https://placehold.co/35" alt="" id="appLogo" />
            </button>
            {open && (
            <ul id="dropdownMenu">
                <li>
                    <img src="https://placehold.co/25" alt="" className="appLogo" />
                    <span>Elsewhere</span>
                </li>
                <li>
                    <img src="https://placehold.co/25" alt="" className="appLogo" />
                    <span>In-n-Out</span>
                </li>
            </ul>
            )}
        </div>
    );
}