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
    <div className="country_border_Container">
      {borderCountryDetail?.map((element) => {
        let { ...countryCurrency } = element?.currencies;
        let { ...countryLanuage } = element?.languages;

        //Borders use CCA3 type.
        //Take the 3 letter number and match w/ CCA3
        //Fetch Item using the CCA 3
        return (
          <div className="country_border_inner_Container">
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
