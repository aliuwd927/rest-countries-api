import "./App.scss";
import Home from "./home";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/country_details/countryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/country_details/:nameOfCountry"
        element={<CountryDetails />}
      />
    </Routes>
  );
}

export default App;

/*
  useParams()
    uses window.location.pathname or window object ( in general...)
    /country_detail is static link
    /country_detail/:country => The :country is dynamic
    params then creates an object out of the dynamic part {country:"string"} or {country:number}
    we then destructure it like this....
    const { country } = useParams()

    const {country}= useParams() also must follow the path...

    example:

    const {country} = useParams()

    <Route path="/country_detail/:country"

*/
