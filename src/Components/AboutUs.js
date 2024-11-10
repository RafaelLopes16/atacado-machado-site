import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Logistica from '../img/Logistica.png';

export const AboutUs = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={Logistica} className="img-fluid" alt="Sobre nós" />
          </div>
          <div className="col-md-6">
            <div className="about-text">
              <h3>QUEM SOMOS</h3>
              <p>{props.data ? props.data.paragraph : "Carregando..."}</p>
              <h5>Por Que nos escolher?</h5>
              <div className="list-style row">
                <div className="col-lg-6 col-sm-6">
                  <ul style={{ listStyleType: 'none' }} >
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>
                            <FontAwesomeIcon color='green' icon={faCheck} className="mr-2" /> {d}
                          </li>
                        ))
                      : "Carregando..."}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <ul  style={{ listStyleType: 'none' }}>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>
                            <FontAwesomeIcon color='green' icon={faCheck} className="mr-2" /> {d}
                          </li>
                        ))
                      : "Carregando..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
