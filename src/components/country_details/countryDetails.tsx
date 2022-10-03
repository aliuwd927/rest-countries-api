import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Root } from "../world/worldinterface";

export default function CountryDetails() {
  //const countryClicked = useParams(); => This will return obj w/ KeyPair:Values
  //use Fetch API => Take value from countryCLick Obj
  //Render country items based off the Fetch API
  const [countryAPIDetails, setCountryAPIDetails] = useState<Root>();
  const { nameOfCountry } = useParams();
  const API_URL = `https://restcountries.com/v3.1/name/${nameOfCountry}?fullText=true`;
  useEffect(() => {
    getCountryDetails(API_URL);
  }, []);

  async function getCountryDetails(url: string) {
    let response = await fetch(url);
    let countryResponse: Root = await response.json();
    setCountryAPIDetails(countryResponse);
  }
  console.log(countryAPIDetails);
  return (
    <div>
      {countryAPIDetails?.map((element) => {
        let { ...countryCurrency } = element?.currencies;
        let { ...countryLanuage } = element?.languages;

        //console.log(countryLanuage);
        return (
          <div>
            <Link to={"/"}>
              <button>Back</button>
            </Link>
            <img src={element.flags.png} alt="" />
            <div>NavtiveName:{element.name.official}</div>
            <div>Population:{element.population}</div>
            <div>Region:{element.region}</div>
            <div>Sub-Region:{element.subregion}</div>
            <div>Capital:{element.capital}</div>
            <div>Top Level Domain:{element.tld}</div>
            <div>
              Currency:
              {Object.values(countryCurrency).map((currency) => {
                return currency.name;
              })}
            </div>
            <div>
              Language:
              {Object.values(countryLanuage).map((language) => {
                return language;
              })}
            </div>
            <div>Border{element.borders}</div>
          </div>
        );
      })}
    </div>
  );
}
