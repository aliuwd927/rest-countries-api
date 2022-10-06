import TextBanner from "./components/banner/TextBannerSection";
import ToggleTheme from "./components/banner/ToggleThemeSection";
import SearchBar from "./components/filter/SearchBar";
import RegionFilter from "./components/filter/RegionFilter";
import World from "./components/world/WorldSection";
import { Root } from "./components/world/worldinterface";
import { useEffect, useState } from "react";

export interface HomeProps {
  bgColor: boolean;
  setBgColor: (props: boolean) => void;
}

export default function Home(props: HomeProps) {
  const [worldState, setWorldState] = useState<Root>();
  const [globalRegion, setGlobalRegion] = useState<string>("");
  const [globalSearch, setGlobalSearch] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    props.setBgColor(darkMode);
  }, [props.setBgColor, darkMode]);
  return (
    <div
      className="Body_Container_Toggle"
      style={{ backgroundColor: props.bgColor ? "#f2f2f2" : "#202C36" }}
    >
      <div className="Header">
        <TextBanner />
        <ToggleTheme setDarkMode={setDarkMode} />
        <SearchBar setGlobalSearch={setGlobalSearch} />
        <RegionFilter
          worldState={worldState}
          setGlobalRegion={setGlobalRegion}
        />
      </div>
      <World
        setWorldState={setWorldState}
        globalRegion={globalRegion}
        globalSearch={globalSearch}
        darkMode={darkMode}
      />
    </div>
  );
}
