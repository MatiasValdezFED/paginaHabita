import React from "react";
import "../index.css";

function Services() {
  return (
    <div>
      <p>  </p>
      <p className="service-text">Nuestros Servicios</p>
      <p>  </p>

      <div className="image-container">
        <img
          src={"src/assets/images/servicios/alquiler.png"}
          alt="Primera imagen"
        />
        <img
          src={"src/assets/images/servicios/administracion.png"}
          alt="Segunda imagen"
        />
        <img
          src={"src/assets/images/servicios/venta.png"}
          alt="Tercera imagen"
        />
        <img
          src={"src/assets/images/servicios/tasaciones.png"}
          alt="Cuarta imagen"
        />
        <img
          src={"src/assets/images/servicios/obra.png"}
          alt="Quinta imagen"
        />
      </div>
    </div>
  );
}

export default Services;

