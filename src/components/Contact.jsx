import React from "react";
import "../index.css";

function Contact() {
  return (
    <div className="containerContact">
      <h1 className="title">Comunicate con nosotros</h1>

      <div className="form-group">
        <div className="row">
          <input type="text" placeholder="Nombre" className="input" />
          <input type="email" placeholder="Correo" className="input" />
        </div>
        <textarea placeholder="Mensaje" className="textarea" />
        <button className="submit-btn">Enviar</button>
      </div>
    </div>
  );
}

export default Contact;
