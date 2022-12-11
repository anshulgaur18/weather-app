import React from 'react';
import "./weather.css";

const Weather = ({data,city}) => {

    console.log(data);
    console.log(data.weather[0].icon);

// const elem = data.weather[0];
// console.log(elem);

//     console.log(data.main)
    // console.log(city);

  return (
    <div className='Weather'>

         <div className="top">
        <div> 
           <p className="city">{city}</p>
           <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
        
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
        <span className='detailsSpan'>Details</span>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Weather