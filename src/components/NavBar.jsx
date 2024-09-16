import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../index.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="nav">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand>
              <img className="imgLogo" src="/logo.png" alt="Habita Logo" />
            </Navbar.Brand>
          </Link>

          <Nav className="ml-auto">
            <Link className="linkNav" to={"/"}>
              Inicio
            </Link>
            <Link className="linkNav" to={"/about-us"}>
              ¿Quiénes Somos?
            </Link>
            <Link className="linkNav" to={"/services"}>
              Servicios
            </Link>
            <Link className="linkNav" to={"/contact"}>
              Contacto
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="wp__container">
        <a
          href="https://api.whatsapp.com/send/?phone=5493516104002"
          target="_blank"
        >
          <i>
            <FaWhatsapp className="iconWp" />
          </i>
        </a>
      </div>
    </>
  );
}

export default ColorSchemesExample;
