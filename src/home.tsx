import SearchBar from "./components/filter/SearchBar";
import RegionFilter from "./components/filter/RegionFilter";
import World from "./components/world/WorldSection";
import { Root } from "./components/world/worldinterface";
import { useEffect, useState } from "react";

export interface HomeProps {
  bgColor: boolean;
}

export default function Home(props: HomeProps) {
  const [worldState, setWorldState] = useState<Root>();
  const [globalRegion, setGlobalRegion] = useState<string>("");
  const [globalSearch, setGlobalSearch] = useState<string>("");

  return (
    <div className="home_Container">
      <div className="Header">
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
        bgColor={props.bgColor}
      />
    </div>
  );
}
