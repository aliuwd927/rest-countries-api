import { useParams, Link } from "react-router-dom";
import { Root } from "../world/worldinterface";

export default function CountryBorder() {
  const { cca3 } = useParams();
  const API_URL = `https://restcountries.com/v3.1/alpha/${cca3}`;
  console.log(cca3);
  return (
    <div>
      {/* <Link to={"/country_details/:nameOfCountry"}> */}
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      <div>{cca3}</div>
    </div>
  );
}
