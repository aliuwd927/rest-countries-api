import { useEffect, useState } from "react";
import { Root } from "./worldinterface";

export interface WorldStateProps {
  setWorldState: (props: Root) => void;
  globalRegion: string;
}

export default function WorldSection(props: WorldStateProps) {
  const [worldAPI, setWorldApi] = useState<Root>();
  const API_URL = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    getWorld(API_URL);
  }, []);

  async function getWorld(url: string) {
    let response = await fetch(url);
    let worldResponse: Root = await response.json();
    setWorldApi(worldResponse);
    props.setWorldState(worldResponse);
  }

  return (
    <div className="WorldSection">
      {worldAPI
        ?.filter((element) => {
          return element.region.includes(props.globalRegion);
        })
        .map((element, index) => {
          return (
            <div key={index} className="country_Container">
              <div key={index} className="country_Flag_Container">
                <img
                  src={element.flags.png}
                  alt="country flags"
                  style={{
                    maxHeight: "200px",
                    height: "100%",
                    width: "100%",
                    objectFit: "fill",
                  }}
                />
              </div>
              <div className="country_Text_Container">
                <h3>{element.name.common}</h3>
                <p>Population: {element.population}</p>
                <p>Region: {element.region}</p>
                <p>Capital: {element.capital}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

//https://retool.com/blog/filtering-data-in-react-filter-map-and-for-loops/
