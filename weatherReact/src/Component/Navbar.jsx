import React, { createContext, useReducer, useState } from "react";
import searchIcon from "./search.png";
import Maincontent from "./Maincontent";
import Mainbody from "./Mainbody";
export const cityNameContext = createContext({
  cityName: "",
  counter: 0,

  enterTrigger: 0,
});
const Navbar = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "searched-a-place":
        return {
          ...state,
          counter: state.counter + 1,
        };

      case "city":
        return {
          ...state,
          cityName: action.payload,
          enterTrigger: state.enterTrigger + 1,

          counter: state.counter + 1,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    cityName: "",
    enterTrigger: 0,
    counter: 0,
  });

  return (
    <cityNameContext.Provider
      value={{
        cityName: state.cityName,
        enterTrigger: state.enterTrigger,
        counter: state.counter,
      }}
    >
      <div className="flex  h-[10vh] w-[100vw]">
        <nav className="h-[10vh] w-[100vw] bg-gray-400 flex gap-[19.5vw]">
          <div className="logo h-[fit-content] w-[fit-content] mt-[2.1vh] ml-[1vw]">
            <h1>
              <b className="text-2xl">NIROULA</b>
            </h1>
          </div>

          <div className="search-bar h-[6vh] w-[30vw]  mt-[2vh] flex gap-0">
            <div className="input h-[6vh] w-[27vw] ">
              <input
                type="text"
                className="user-input h-[6vh] w-[27vw] m-0 rounded-tl-[5vw] rounded-bl-[5vw] border focus:border-none outline-none 
             caret-zinc-600  text-[2.5vh]  p-[1vw]  "
                placeholder="Search for any cities/countries in the world"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    dispatch({ type: "city", payload: e.target.value });
                  }
                }}
              />
            </div>

            <div className="search-icon h-[6vh] w-[3vw] bg-blue-300 flex rounded-tr-[5vw] rounded-br-[5vw]">
              <button
                className="flex h-[6vh] w-[3vw] rounded-tr-[5vw] rounded-br-[5vw] border-none"
                onClick={() => {
                  dispatch({ type: "searched-a-place" });
                }}
              >
                <img
                  src={searchIcon}
                  alt="search icon"
                  className="h-[4vh] w-[2vw] m-auto"
                />
              </button>
            </div>
          </div>

          <div className="home-about-contact h-[10vh] w-[22vw]  mr-[5vw]">
            <ul className="flex justify-center items-center h-[10vh] w-[22vw] gap-[4vw] text-2xl">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Mainbody />
    </cityNameContext.Provider>
  );
};

export default Navbar;
