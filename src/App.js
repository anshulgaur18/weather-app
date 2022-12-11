import React from "react";
import { useState } from "react";
import Search from "./components/search/Search";
import Weather from "./components/weather/Weather";

const App = () => {
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [city, SetCity] = useState("");

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const lat = searchData.lat;
    console.log(lat);
    const long = searchData.long;
    console.log(long);
  
 

  const currentWeatherFetch = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5ac017bfe8b8e8df8eeadc89e23057d1&units=metric`
  );

  Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        
      })
      .catch(console.log);
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
      {currentWeather && <Weather data={currentWeather} city={city} />}
    </div>
  );
};

export default App;
