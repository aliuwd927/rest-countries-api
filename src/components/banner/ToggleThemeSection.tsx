import { useEffect, useState } from "react";

export interface ToggleThemeProps {
  setBgColor: (props: boolean) => void;
}

export default function ToggleThemeSection(props: ToggleThemeProps) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    props.setBgColor(!darkMode);
  }, [props.setBgColor, darkMode]);

  function handleToggle() {
    setDarkMode(!darkMode);
  }
  return (
    <div className="ToggleThemeSection" onClick={handleToggle}>
      Dark Mode
    </div>
  );
}
