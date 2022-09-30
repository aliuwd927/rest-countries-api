import { useEffect, useState } from "react";
import { Root } from "./worldinterface";
import { Link } from "react-router-dom";

export interface WorldStateProps {
  setWorldState: (props: Root) => void;
  globalRegion: string;
  globalSearch: string;
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

  function handleCountryRoute(): void {
    console.log("Routing....");
  }
  return (
    <div className="WorldSection">
      {worldAPI
        ?.filter((element) => {
          let country = element.name.common.toLowerCase();
          if (
            props.globalSearch.toLowerCase() === country ||
            props.globalSearch.length !== 0
          ) {
            return country.includes(props.globalSearch.toLowerCase());
          } else {
            return element.region.includes(props.globalRegion);
          }
        })
        .map((element, index) => {
          return (
            <Link to="/country_details/">
              <div
                key={index}
                className="country_Container"
                onClick={handleCountryRoute}
              >
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
            </Link>
          );
        })}
    </div>
  );
}

//https://retool.com/blog/filtering-data-in-react-filter-map-and-for-loops/
