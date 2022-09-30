import "./App.scss";
import TextBanner from "./components/banner/TextBannerSection";
import ToggleTheme from "./components/banner/ToggleThemeSection";
import SearchBar from "./components/filter/SearchBar";
import RegionFilter from "./components/filter/RegionFilter";
import World from "./components/world/WorldSection";
import { Root } from "./components/world/worldinterface";
import { useState } from "react";

function App() {
  const [worldState, setWorldState] = useState<Root>();
  const [globalRegion, setGlobalRegion] = useState<string>("");
  const [globalSearch, setGlobalSearch] = useState<string>("");
  //ToDo:
  /*
    Lift State Up from Search Bar Section
    Pass it down to World
    Consider that we also have RegionFilter well render
  */
  return (
    <div className="App">
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

export default App;
