import "./App.css";
import TextBanner from "./components/banner/TextBannerSection";
import ToggleTheme from "./components/banner/ToggleThemeSection";
import SearchBarSection from "./components/filter/SearchBarSection";
import RegionFilter from "./components/filter/RegionFilter";
import World from "./components/world/WorldSection";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <TextBanner />
        <ToggleTheme />
        <SearchBarSection />
        <RegionFilter />
      </div>
      <World />
    </div>
  );
}

export default App;
