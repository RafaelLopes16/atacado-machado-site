import React from "react";
import exampleImage from '../assets/images/public/6a54c69f-8567-4cde-bcf1-2582d0638f17-removebg-preview.png';

export const Navigation = () => {
  return (

    <div className='form-group row'>
<div className='col-12'>
    <nav id="menu" className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <img
            src={exampleImage}
            alt="Example"
            style={{
              width: '180px',
              height: '60px',
            }}
          />
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#features" className="nav-link page-scroll">
                Parceiros
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link page-scroll">
                Quem Somos
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link page-scroll">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link page-scroll">
                Contato
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link page-scroll">
                Trabalhe Conosco
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    </div>
  );
};
