import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Root } from "../world/worldinterface";

export default function CountryBorder() {
  const [borderCountryDetail, setBorderCountryDetail] = useState<Root>();
  const { cca3 } = useParams();
  const API_URL = `https://restcountries.com/v3.1/alpha/${cca3}`;

  useEffect(() => {
    getCountryByCCA(API_URL);
  }, [API_URL]);

  async function getCountryByCCA(url: string): Promise<void> {
    let response = await fetch(url);
    let countryByCCA = await response.json();
    setBorderCountryDetail(countryByCCA);
  }
  return (
    <div className="Body_Container_Toggle">
      {borderCountryDetail?.map((element) => {
        let { ...countryCurrency } = element?.currencies;
        let { ...countryLanuage } = element?.languages;

        //Borders use CCA3 type.
        //Take the 3 letter number and match w/ CCA3
        //Fetch Item using the CCA 3
        return (
          <div>
            <Link to={"/"}>
              <button>Back</button>
            </Link>
            <br />
            <img src={element.flags.png} alt="" />
            <br />
            <div>NavtiveName:{element.name.official}</div>
            <br />
            <div>Population:{element.population}</div>
            <br />
            <div>Region:{element.region}</div>
            <br />
            <div>Sub-Region:{element.subregion}</div>
            <br />
            <div>Capital:{element.capital}</div>
            <br />
            <div>Top Level Domain:{element.tld}</div>
            <br />
            <div>
              Currency:
              {Object.values(countryCurrency).map((currency) => {
                return <div>{currency.name}</div>;
              })}
            </div>
            <br />
            <div>
              Language:
              {Object.values(countryLanuage).map((language) => {
                return <div>{language}</div>;
              })}
            </div>
            <br />
            <div>
              Border:
              {element.borders?.map((border) => {
                return (
                  <div>
                    <Link to={`/country_borders/${border}`}>
                      <button>{border}</button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
