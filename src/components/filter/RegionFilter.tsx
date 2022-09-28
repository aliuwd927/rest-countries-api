import { useState, ChangeEvent } from "react";
import { Root } from "../world/worldinterface";

export interface RegionFilterProps {
  worldState?: Root;
  setGlobalRegion: (props: string) => void;
}

export default function RegionFilter(props: RegionFilterProps) {
  const [region, setRegion] = useState<string>("");

  let regionSet: string[] = [
    ...new Set(
      props.worldState?.map((element) => {
        return element.region;
      })
    ),
  ];

  function handleRegion(e: ChangeEvent<HTMLSelectElement>): void {
    console.log(e.currentTarget.value);
    setRegion(e.currentTarget.value);
    props.setGlobalRegion(region);
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
