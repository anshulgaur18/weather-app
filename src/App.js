import React from "react";
import { useState } from "react";
import Search from "./components/search/Search";
import Weather from "./components/weather/Weather";

const App = () => {
  const [data, setData] = useState();
  const [city, SetCity] = useState("");

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    setData(searchData);
  };

  const handleOnCitySearchChange = (search) => {
    SetCity(search);
    // console.log(search);
  };

  return (
    <div className="container">
      <Search
        onSearchChange={handleOnSearchChange}
        onCitySearch={handleOnCitySearchChange}
      />
      {data && <Weather data={data} city={city} />}
    </div>
  );
};

export default App;
