import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./App.css";
import Weather from "./components/weather/Weather";

const App = () => {
  const [city, SetCity] = useState("");
  const [search, setSearch] = useState("");
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [currentWeather, setCurrentWeather] = useState(null);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    locationFetch(search);
    SetCity(search);
    console.log(currentWeather);
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "931b8b49cfmsh4d6bc39c2c639f6p13663cjsnbf0703b6727d",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const locationFetch = (value) => {
    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${value}`,
      options
    )
      .then(async (response) => await response.json())
      .then(async(response) => {
        await setLat(response.data[0].latitude);
        await setLong(response.data[0].longitude);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  const currentWeatherFetch = (lat, long) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5ac017bfe8b8e8df8eeadc89e23057d1&units=metric`
    )
      .then(async (response) => await response.json())
      .then((response) => {
        setCurrentWeather(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    if(lat&&long){
      console.log(lat);
      console.log(long);
      currentWeatherFetch(lat, long);
  
      console.log(currentWeather);
    }
  },[lat,long])

    

  return (
    <div className="container">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search for city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch size={14} />
          </button>
        </form>
      </div>
      {currentWeather && <Weather data={currentWeather} city={city} />}
    </div>
  );
};

export default App;
