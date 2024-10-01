import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../index.css";

function Services() {
  return (
    <div>
      <p className="service-text">Nuestros Servicios</p>

      {/* Carrusel con intervalos y controles personalizados */}
      <Carousel
        fade
        interval={45000}
        controls={true}
        indicators={false}
        pause="hover"
        className="services-carousel"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"src/assets/images/servicios/alquiler.png"}
            alt="Primera imagen"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"src/assets/images/servicios/administracion.png"}
            alt="Segunda imagen"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"src/assets/images/servicios/venta.png"}
            alt="Tercera imagen"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"src/assets/images/servicios/tasaciones.png"}
            alt="Cuarta imagen"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"src/assets/images/servicios/obra.png"}
            alt="Quinta imagen"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Services;
