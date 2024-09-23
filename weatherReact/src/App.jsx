import React from 'react'
import Mainbody from './Component/Mainbody';
import "./App.css";
import Navbar from "./Component/Navbar";


function App() {
  return (
    <div className="App h-[100vh] overflow-hidden " >
      <Navbar />
      <Mainbody />
     
    
     </div>
  );
}

export default App;
