import "./App.scss";
import TextBanner from "./components/banner/TextBannerSection";
import ToggleTheme from "./components/banner/ToggleThemeSection";
import SearchBarSection from "./components/filter/SearchBarSection";
import RegionFilter from "./components/filter/RegionFilter";
import World from "./components/world/WorldSection";
import { Root } from "./components/world/worldinterface";
import { useState } from "react";

function App() {
  const [worldState, setWorldState] = useState<Root>();
  const [globalRegion, setGlobalRegion] = useState<string>("");

  return (
    <div className="App">
      <div className="Header">
        <TextBanner />
        <ToggleTheme />
        <SearchBarSection />
        <RegionFilter
          worldState={worldState}
          setGlobalRegion={setGlobalRegion}
        />
      </div>
      <World setWorldState={setWorldState} globalRegion={globalRegion} />
    </div>
  );
}

export default App;
