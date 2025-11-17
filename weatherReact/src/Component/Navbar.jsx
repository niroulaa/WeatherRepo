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
return { ...state, counter: state.counter + 1 };
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
<cityNameContext.Provider value={state}>
<nav className="h-[10vh] w-full bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-between px-10 shadow-xl">
<h1 className="text-3xl font-bold text-white tracking-wide">NIROULA</h1>


<div className="flex items-center w-[32vw] bg-white rounded-full shadow-lg overflow-hidden">
<input
type="text"
className="flex-1 px-5 py-3 text-lg outline-none"
placeholder="Search any city..."
onKeyDown={(e) => e.key === "Enter" && dispatch({ type: "city", payload: e.target.value })}
/>
<button
className=" h-full px-5 flex items-center justify-center "
onClick={() => dispatch({ type: "searched-a-place" })}
>
<img src={searchIcon} className="h-6 w-6" />
</button>
</div>


<ul className="flex gap-10 text-white text-xl font-medium">
<li className="hover:text-blue-300 cursor-pointer">Home</li>
<li className="hover:text-blue-300 cursor-pointer">About</li>
<li className="hover:text-blue-300 cursor-pointer">Contact</li>
</ul>
</nav>


<Mainbody />
</cityNameContext.Provider>
);
};

export default Navbar;
