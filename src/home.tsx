import TextBanner from "./components/banner/TextBannerSection";
import ToggleTheme from "./components/banner/ToggleThemeSection";
import SearchBar from "./components/filter/SearchBar";
import RegionFilter from "./components/filter/RegionFilter";
import World from "./components/world/WorldSection";
import { Root } from "./components/world/worldinterface";
import { useState } from "react";

export default function Home() {
  const [worldState, setWorldState] = useState<Root>();
  const [globalRegion, setGlobalRegion] = useState<string>("");
  const [globalSearch, setGlobalSearch] = useState<string>("");
  return (
    <div className="Home">
      <div className="Header">
        <TextBanner />
        <ToggleTheme />
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
      />
    </div>
  );
}
