import { useEffect, useState } from "react";

export interface ToggleThemeProps {
  setDarkMode: (props: boolean) => void;
}

export default function ToggleThemeSection(props: ToggleThemeProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(() => {
    props.setDarkMode(toggle);
  }, [props.setDarkMode, toggle]);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div
      className="ToggleThemeSection"
      onClick={handleToggle}
      // style={{ backgroundColor: toggle ? "#ffffff" : "#404040" }}
    >
      Dark Mode
    </div>
  );
}
