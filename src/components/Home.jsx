import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import "../index.css";

function Home() {
  return (
    <div>
      <div class="whiteBar"></div>
      <Carousel
        fade
        interval={3000}
        controls={false}
        indicators={false}
        pause="false"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"src/assets/images/inicio/img1.jpg"}
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
            className="d-block w-100"
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
            className="d-block w-100"
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
      <h1> </h1>;
    </div>
  );
}

export default Home;
