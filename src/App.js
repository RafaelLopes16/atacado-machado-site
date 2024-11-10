import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './Components/Navegation';
import { Header } from './Components/Header';
import { Partners } from './Components/Partners';
import JsonData from "./data/data.json";
import React, { useState, useEffect } from "react";


function App() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div style={{fontFamily:"Raleway, sans-serif"}}>
  
   
  
          <Navigation></Navigation>
          <Header data={landingPageData.Header}></Header>
      <Partners data={landingPageData.Features} > </Partners>
      </div>

      
      
      
  );
}

export default App;
