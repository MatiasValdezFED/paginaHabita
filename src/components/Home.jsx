import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import "../index.css";

function Home() {
  return (
    <div>
      <div className="whiteBar"></div>
      <Carousel
        fade
        interval={3000}
        controls={false}
        indicators={false}
        pause="false"
        className="inicio-carousel"
      >
        <Carousel.Item>
          <img
            className="d-block w-100 img-pos-right"
            src={"src/assets/images/inicio/img1.png"}
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <p className="small-text">Tu próximo hogar está acá</p>
            <p> </p>
            <h2 className="large-text">
              Tu confianza,
              <br /> nuestra prioridad
            </h2>
            <p> </p>
            <a
              href="https://wa.me/message/GABFF33RIWHXJ1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="button-text">Contactá con un asesor</p>
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-pos-right-2"
            src={"src/assets/images/inicio/img2.png"}
            alt="Segunda imagen"
          />
          <Carousel.Caption>
            <p className="small-text">Tu próximo hogar está acá</p>
            <p> </p>
            <h2 className="large-text">
              Encontrá el lugar <br /> que mejor va con vos
            </h2>
            <p> </p>
            <a
              href="https://wa.me/message/GABFF33RIWHXJ1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="button-text">Contactá con un asesor</p>
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-pos-left"
            src={"src/assets/images/inicio/img3.png"}
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <p className="small-text">Tu próximo hogar está acá</p>
            <p> </p>
            <h2 className="large-text">
              Nosotros administramos,
              <br />
              vos administrá tu tiempo
            </h2>
            <p> </p>
            <a
              href="https://wa.me/message/GABFF33RIWHXJ1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="button-text">Contactá con un asesor</p>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="whiteBar"></div>
    </div>
  );
}

export default Home;
