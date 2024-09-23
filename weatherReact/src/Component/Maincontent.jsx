import React, { useContext, useEffect, useState } from "react";
import './style.css';
import wind from './wind.png';
import humidity from './humidity.png';
import { cityNameContext } from "./Navbar";

const Maincontent = () => {
  const { cityName, searchClicked, cityChanged } = useContext(cityNameContext);
  
  const [currentTemp, setCurrentTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [humid, setHumid] = useState(null);
  const [feelLike, setFeelLike] = useState(null);
  const [weatherState, setWeatherState] = useState('');

  useEffect(() => {
    if (searchClicked || cityChanged) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=613ea0f65b83816785fb70e79b98c670`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // To confirm data is being fetched
          setCurrentTemp(Math.round(data.main.temp - 273.15));
          setMaxTemp(Math.round(data.main.temp_max - 273.15));
          setMinTemp(Math.round(data.main.temp_min - 273.15));
          setWindSpeed(Math.round(data.wind.speed * 3.6));
          setHumid(data.main.humidity); // Humidity is a percentage
          setFeelLike(Math.round(data.main.feels_like - 273.15));
          setWeatherState(data.weather[0].main);
        })
        .catch((error) => {
          console.log('Error occurred', error);
        });
    }
  }, [searchClicked, cityChanged ]);

  return (
    <div className='weather-details h-[90vh] w-[70vw] bg-gradient-to-r from-neutral-300 to-stone-400 flex flex-col'>
      <div className='first-div w-[70vw] h-[10vh] flex items-center justify-center'>
        <div className='place-weather w-[30vw] flex'>
          <h1 className='text-3xl m-auto'>
            Today's Weather in {cityName}
          </h1>
        </div>
      </div>

      <div className='second-div h-[20vh] flex justify-around'>
        <div className='max-min-temp'>
          <strong className='text-3xl'>
            Max Temp: {maxTemp !== null ? `${maxTemp}°C` : '--'}
          </strong>
        </div>
        <div className='max-min-temp'>
          <strong className='text-3xl'>
            Min Temp: {minTemp !== null ? `${minTemp}°C` : '--'}
          </strong>
        </div>
      </div>

      <div className='h-[10vh] humid-wind-speed flex'>
        <div className='wrapper h-[10vh] w-[65vh] flex items-center m-auto gap-[2vw]'>
          <div className='wind-icon h-[10vh]'>
            <img src={wind} className='h-[10vh]' alt="Wind" />
          </div>
          <div className='wind-value'>
            <strong className='text-3xl'>
              Wind Speed: {windSpeed !== null ? `${windSpeed} km/h` : '--'}
            </strong>
          </div>
        </div>
      </div>

      <div className='third-div h-[20vh] flex'>
        <strong className='text-3xl m-auto'>
          Current Temperature: {currentTemp !== null ? `${currentTemp}°C` : '--'}
        </strong>
      </div>

      <div className='h-[10vh] humid-wind-speed flex'>
        <div className='wrapper h-[10vh] w-[65vh] flex items-center m-auto gap-[3vw]'>
          <div className='humid-icon h-[10vh]'>
            <img src={humidity} className='h-[10vh]' alt="Humidity" />
          </div>
          <div className='humid-per'>
            <strong className='text-3xl'>
              Humidity: {humid !== null ? `${humid}%` : '--'}
            </strong>
          </div>
        </div>
      </div>

      <div className='fourth-div h-[20vh] mb-[0vh] flex'>
        <strong className='text-3xl m-auto'>
          Feels Like: {feelLike !== null ? `${feelLike}°C` : '--'}
        </strong>
      </div>
    </div>
  );
};

export default Maincontent;
