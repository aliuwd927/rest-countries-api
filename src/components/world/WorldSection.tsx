import { useEffect, useState } from "react";
import { Root } from "./worldinterface";

export default function WorldSection() {
  const [worldAPI, setWorldApi] = useState<Root>();
  const API_URL = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    getWorld(API_URL);
  }, []);

  async function getWorld(url: string) {
    let response = await fetch(url);
    let worldResponse: Root = await response.json();
    setWorldApi(worldResponse);
  }
  console.log(worldAPI);
  /**
   *
   * worldApi contains an array of 250 items
   * each row is 4 items
   *
   */
  return (
    <div className="WorldSection">
      {worldAPI?.map((element, index) => {
        //for every 4 , created a new div container
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
