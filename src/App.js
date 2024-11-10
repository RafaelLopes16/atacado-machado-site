import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './Components/Navegation';
import { Header } from './Components/Header';
import { Partners } from './Components/Partners';
import { AboutUs } from './Components/AboutUs';
import JsonData from "./data/data.json";
import React, { useState, useEffect } from "react";


function App() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div style={{ fontFamily: "Raleway, sans-serif" }}>



      <Navigation></Navigation>
      <hr style={{
        width: '100%',         // Defina a largura desejada
        borderTop: '1px solid #333',
        marginBottom:'0' // Centraliza a linha e adiciona margens acima e abaixo
      }} />
      <Header data={landingPageData.Header}></Header>
      <hr style={{
        width: '90%',         // Defina a largura desejada
        borderTop: '1px solid #333',  // Cor e espessura da linha
        margin: '40px auto',  // Centraliza a linha e adiciona margens acima e abaixo
      }} />
      <Partners data={landingPageData.Features} > </Partners>
      <br></br>
      <hr style={{
        width: '90%',         // Defina a largura desejada
        borderTop: '1px solid #333',  // Cor e espessura da linha
        margin: '40px auto',  // Centraliza a linha e adiciona margens acima e abaixo
      }} />
      <AboutUs data={landingPageData.About}></AboutUs>
    </div>




  );
}

export default App;
