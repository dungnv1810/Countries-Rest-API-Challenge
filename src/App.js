import React from "react";
import {Routes, Route} from "react-router-dom"
import AllCountries from "./Component/AllCountries/AllCountries";
import Countryinfo from "./Component/Countryinfo/Countryinfo";
import './app.css'
function App() {
  return (
    <>
      <div className="header">
        <header className="container">
          <h5>Where in the world</h5>
        </header>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries/>}/>
          <Route path="/country/:countryName" element={<Countryinfo/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
