import React, { useContext } from "react";
import sunny from "./clear (sunny).png";
import clouds from "./CLOUDS.png";
import rain from "./RAIN.png";
import wind from "./wind.png";
import { cityNameContext } from "./Navbar";
import { weatherContext } from "./Maincontent";

const Sidebody = () => {
  const { cityName,   enterTrigger } =
    useContext(cityNameContext);
  const weatherState = useContext(weatherContext);

  return (
<div className="weather-icon w-full md:w-[30%] min-h-[80vh] bg-slate-200 flex flex-col">
      <div className="weather-icon-div  h-[60vh]  flex    bg-gradient-to-r from-slate-300 to-slate-500 ">
        {weatherState === null ? (
          <h1 className="m-auto text-2xl font-bold">
            Sunny? Cloudy? What'dya think?
          </h1>
        ) : (
          <img
            src={
              weatherState === "Clear"
                ? sunny
                : weatherState === "Clouds"
                ? clouds
                : weatherState === "Rain"
                ? rain
                : ""
            }
            alt="weather"
            className=" h-[40vh] m-auto scale-125"
          />
        )}
      </div>

      <div className="cloudyorrainy  h-[30vh] w-full ">
        <div className="h-[30vh] w-[30vw] bg-gradient-to-r from-cyan-500 to-blue-500 mt-[0vh] flex   items-center justify-center ">
          <strong
            className={`text-3xl  text-white ${
              enterTrigger == 0 ? "hidden" : "block"
            }`}
          >
            It's{" "}
            {weatherState == "Clouds"
              ? "cloudy"
              : weatherState == "Rain"
              ? "rainy"
              : weatherState == "Clear"
              ? "sunny"
              : ``}{" "}
            in {cityName}
          </strong>
          <strong
            className={`text-3xl  text-white ${
              enterTrigger != 0 ? "hidden" : "block"
            }`}
          >
            Hey ! which place?
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Sidebody;
