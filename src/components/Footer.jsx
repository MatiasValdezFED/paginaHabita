// components/Footer.js
import React from "react";
import "../index.css";

function Footer() {
  return (
    <footer className="footer-container text-center py-3">
      <div className="icon-container">
        <a
          href="https://www.instagram.com/habita.inmuebles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-box">
            <img
              className="imgLogo"
              src={"src/assets/images/footer/instagram.png"}
              alt="Instagram Logo"
              style={{ width: 30, height: 30 }}
            />
          </div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61558924670981"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-box">
            <img
              className="imgLogo"
              src={"src/assets/images/footer/facebook.png"}
              alt="Facebook Logo"
              style={{ width: 30, height: 30 }}
            />
          </div>
        </a>
        <a href="mailto:habita.contacto.adm@gmail.com?subject=Quiero%20que%20me%20contacten&body=Hola%2C%0A%0AQuisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Habita.%20Estoy%20interesado%20en%3A%0A%0A-%20Alquilar%20una%20propiedad%0A-%20Vender%20una%20propiedad%0A-%20La%20Administraci%C3%B3n%20de%20propiedades%0A-%20La%20Administraci%C3%B3n%20de%20Consorcios%0A-%20Tasaci%C3%B3n%20de%20mi%20propiedad%0A-%20Otro%3A%0A%0AMe%20gustar%C3%ADa%20que%20me%20contacten%20para%20conversar%20m%C3%A1s%20sobre%20las%20opciones%20disponibles%20y%20c%C3%B3mo%20pueden%20ayudarme.%0A%0ASaludos%0A%5BNombre%5D%20%0A%5BTel%C3%A9fono%20de%20contacto%5D%0A %0A %0A">
          <div className="icon-box">
            <img
              className="imgLogo"
              src={"src/assets/images/footer/gmail.png"}
              alt="Gmail Logo"
              style={{ width: 30, height: 30 }}
            />
          </div>
        </a>
        <a
          href="https://wa.me/5493517886075"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-box">
            <img
              className="imgLogo"
              src={"src/assets/images/footer/whatsapp.png"}
              alt="WhatsApp Logo"
              style={{ width: 30, height: 30 }}
            />
          </div>
        </a>
      </div>
      <p>
        © 2024 Habita Servicios Inmobiliarios. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
