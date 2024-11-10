import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Import download icon

export const Partners = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 offset-md-1 section-title mb-4 mt-5">
          <h2>PARCEIROS</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-12 col-md-3 mb-4">
                <i className={d.icon} style={{ fontSize: '2em' }}></i> {/* Icon size increased */}
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
            : "Loading..."}
        </div>

        <a
          href="../assets/files/public/CATALOGO_MACHADO_PURATOS.pdf" // Path to your file
          download // This attribute prompts the browser to download the file
          className="btn btn-outline-dark rounded-pill mt-3 mb-4"
          style={{ padding: '10px 20px', fontSize: '16px' }} // Customize padding and font size
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" /> {/* Download icon */}
          BAIXAR CATÁLOGO
        </a>
      </div>
    </div>
  );
};
