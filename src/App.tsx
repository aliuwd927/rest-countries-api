import "./App.scss";
import Home from "./home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TextBanner from "./components/banner/TextBannerSection";
import ToggleTheme from "./components/banner/ToggleThemeSection";
import CountryDetails from "./components/country_details/countryDetails";
import CountryBorder from "./components/country_details/countryBorder";

function App() {
  const [bgColor, setBgColor] = useState<boolean>(true);

  return (
    <div
      className="App"
      style={{ backgroundColor: bgColor ? "#202C36" : "#F2F2F2" }}
    >
      <div className="Header">
        <TextBanner />
        <ToggleTheme setBgColor={setBgColor} />
      </div>
      <Routes>
        <Route path="/" element={<Home bgColor={bgColor} />} />
        <Route
          path="/country_details/:nameOfCountry"
          element={<CountryDetails />}
        />
        <Route
          path="/country_borders/:cca3"
          element={<CountryBorder />}
        ></Route>
      </Routes>
    </div>
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
