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
  }, [API_URL]);

  async function getCountryDetails(url: string): Promise<void> {
    let response = await fetch(url);
    let countryResponse: Root = await response.json();
    setCountryAPIDetails(countryResponse);
  }
  return (
    <div className="country_Detail_Container">
      {countryAPIDetails?.map((element) => {
        let { ...countryCurrency } = element?.currencies;
        let { ...countryLanuage } = element?.languages;

        //Borders use CCA3 type.
        //Take the 3 letter number and match w/ CCA3
        //Fetch Item using the CCA 3
        return (
          <div className="country_Detail_Inner_Container">
            <div className="Rtn_Home_Btn">
              <Link to={"/"}>
                <button>Back</button>
              </Link>
            </div>

            <div className="country_Detail_Flag">
              <img src={element.flags.png} alt="" />
            </div>

            <div className="country_Details_Stats_L">
              <div>NavtiveName:{element.name.official}</div>

              <div>Population:{element.population}</div>

              <div>Region:{element.region}</div>

              <div>Sub-Region:{element.subregion}</div>

              <div>Capital:{element.capital}</div>
            </div>

            <div className="country_Details_Stats_R">
              <div>Top Level Domain:{element.tld}</div>

              <div>
                Currency:
                {Object.values(countryCurrency).map((currency) => {
                  return <div>{currency.name}</div>;
                })}
              </div>

              <div>
                Language:
                {Object.values(countryLanuage).map((language) => {
                  return <div>{language}</div>;
                })}
              </div>
            </div>

            <div className="Border_Stuff">
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

/*
  CSS Grid:

  Use Parent Container to set the layout

  Only wrap items in div Once
  No Divs within a div, that complicates things.


*/
