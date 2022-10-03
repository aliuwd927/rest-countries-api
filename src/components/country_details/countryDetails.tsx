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
                return <div>{border}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
