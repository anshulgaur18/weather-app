import React from "react";
import { useState } from "react";
import "./search.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({onSearchChange,onCitySearch}) => {
  const [search, setSearch] = useState("");
  const [lat, setLat] = useState();
  const [long , setLong] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    locationFetch(search);
    weatherfech(lat,long);
    onCitySearch(search);
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
      .then((response) => response.json())
      .then((response) => {
        setLat(response.data[0].latitude);
        setLong(response.data[0].longitude)
        console.log(response);
       
      })
      .catch((err) => console.error(err));
  };

  const weatherfech = () => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5ac017bfe8b8e8df8eeadc89e23057d1&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        onSearchChange(response);
      })
      .catch((err) => console.error(err));
  };

  // console.log(lat);
  // console.log(long);

  return (
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
  );
};

export default Search;
