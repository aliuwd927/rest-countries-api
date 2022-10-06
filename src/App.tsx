import "./App.scss";
import Home from "./home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/country_details/countryDetails";
import CountryBorder from "./components/country_details/countryBorder";

function App() {
  const [bgColor, setBgColor] = useState<boolean>(true);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home setBgColor={setBgColor} bgColor={bgColor} />}
      />
      <Route
        path="/country_details/:nameOfCountry"
        element={<CountryDetails bgColor={bgColor} />}
      />
      <Route
        path="/country_borders/:cca3"
        element={<CountryBorder bgColor={bgColor} />}
      ></Route>
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
