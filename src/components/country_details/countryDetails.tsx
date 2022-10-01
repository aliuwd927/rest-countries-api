import { useParams } from "react-router-dom";
export default function CountryDetails() {
  //const countryClicked = useParams(); => This will return obj w/ KeyPair:Values
  //use Fetch API => Take value from countryCLick Obj
  //Render country items based off the Fetch API
  const { nameOfCountry } = useParams();

  return <div>Country:{nameOfCountry}</div>;
}
