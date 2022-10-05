import { useState } from "react";

export default function ToggleThemeSection() {
  const [toggle, setToggle] = useState(true);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div
      className="ToggleThemeSection"
      onClick={handleToggle}
      style={{ backgroundColor: toggle ? "#ffffff" : "#404040" }}
    >
      Dark Mode
    </div>
  );
}
