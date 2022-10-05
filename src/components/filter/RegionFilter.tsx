import { useState, ChangeEvent, useEffect } from "react";
import { Root } from "../world/worldinterface";

export interface RegionFilterProps {
  worldState?: Root;
  setGlobalRegion: (props: string) => void;
}

export default function RegionFilter(props: RegionFilterProps) {
  const [region, setRegion] = useState<string>("");

  useEffect(() => {
    props.setGlobalRegion(region);
  }, [props.setGlobalRegion, region]);

  let regionSet: string[] = [
    ...new Set(
      props.worldState?.map((element) => {
        return element.region;
      })
    ),
  ];

  function handleRegion(e: ChangeEvent<HTMLSelectElement>): void {
    setRegion(e.currentTarget.value);
  }

  return (
    <div className="RegionFilterSection">
      <select title="Region" name="Region" onChange={handleRegion}>
        <option value="">Filter By Region</option>
        {regionSet.map((element, index) => {
          return (
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </select>
    </div>
  );
}

//https://codesandbox.io/s/serene-euclid-kww5xm?file=/src/App.tsx
//https://stackblitz.com/edit/react-ts-cdxsru?file=App.tsx,App.module.scss
