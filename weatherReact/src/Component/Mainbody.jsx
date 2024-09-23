// import React, { createContext, useContext, useEffect } from "react";
// import { cityNameContext } from "./Navbar";
import Sidebody from "./Sidebody";
import Maincontent from "./Maincontent";

const Mainbody = () => {
    
    

 

  return( 
  <div className="h-[90vh] w-[100vw]  mt-0 flex gap-0">
    <Sidebody />
    <Maincontent />
           
    
  </div>
  

  )
};

export default Mainbody;
