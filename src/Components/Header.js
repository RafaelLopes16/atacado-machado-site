import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import backgroundImage from '../assets/images/public/image.png';

export const Header = (props) => {
  const styles = {
    intro: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "500px", // Exemplo de altura
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay com transparência
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      backgroundColor: "#25D366", // Cor verde do WhatsApp
      color: "white", // Texto branco
      border: "none",
      borderRadius: "25px", // Deixa mais arredondado
      padding: "10px 20px",
      textDecoration: "none", // Remove o sublinhado do link
      display: "inline-flex", // Centraliza conteúdo do botão
      alignItems: "center", // Centraliza o ícone e texto
      cursor: "pointer",
      transition: "background-color 0.3s", // Suaviza a mudança de cor no hover
    },
    icon: {
      marginRight: "8px", // Espaço entre ícone e texto
    },
  };

  return (

    
    <div className='form-group row align-items-center' style={{
        borderTop: '1px solid #333',
        borderBottom: '1px solid #333'
      }}>
        <div className="col-4 ml-2" style={{paddingLeft:"3%"}}>
            <h3 style={{paddingBottom:'3%'}}>
            Distribuindo qualidade, gerando valor ao seu negócio.
            </h3>
        <a 
              href="https://wa.me/554996986518?text=Hello,%20I%20would%20like%20to%20talk%20to%20you!"
              style={styles.button} // Aplica os estilos do botão
              target="_blank" // Abre em uma nova aba
              rel="noopener noreferrer" // Segurança para links externos
              onMouseOver={e => e.currentTarget.style.backgroundColor = "#1DAF4B"} // Cor no hover
              onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor} // Reseta a cor ao sair
            >
              <FontAwesomeIcon icon={faWhatsapp} style={styles.icon} /> {/* Ícone do WhatsApp */}
              FALE CONOSCO
            </a>
        </div>
    <div className='col-8'>
    <header id="header">
      <div className="intro" style={styles.intro}>
        <div className="overlay" style={styles.overlay}>
          <div className="container text-center text-white">
            <h2 style={{font:'Raleway'}}>
              { "..."}
            </h2>
 
          </div>
        </div>
      </div>
    </header>
    </div>
    </div>
  );
};
