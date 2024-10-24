import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../index.css";
import { FaBars } from "react-icons/fa"; // Icono de hamburguesa si prefieres usar un icono personalizado

const NavBarHeight = 336;

function ColorSchemesExample() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef(false);
  const [expanded, setExpanded] = useState(false); // Estado para controlar el menú desplegable

  const handleScroll = () => {
    const scrolled = window.scrollY >= NavBarHeight;
    if (scrollRef.current !== scrolled) {
      scrollRef.current = scrolled;
      setIsScrolled(scrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)} // Controla el estado del menú hamburguesa
        expand="lg" // Hace el navbar responsive
        className={`nav`}
      >
        <Container className="container-div">
          <Navbar.Brand href="/">
            <img
              className={`img-logo image-big ${
                isScrolled ? "hidden" : "displayed"
              }`}
              src="/logo.png"
              alt="Habita Logo"
            />
          </Navbar.Brand>

          {/* Botón hamburguesa */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars style={{ color: "white" }} />{" "}
            {/* Puedes usar este icono de hamburguesa */}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu-container">
              <Nav className="menu-items-container">
                <Navbar.Brand href="/">
                  <img
                    className={`img-logo image-small ${
                      isScrolled ? "displayed" : "hidden"
                    }`}
                    src="/logo_solo.png"
                    alt="Habita Logo"
                  />
                </Navbar.Brand>

                <Nav className="menu-items">
                  <Link
                    className="link-nav"
                    to={"/"}
                    onClick={() => setExpanded(false)}
                  >
                    Inicio
                  </Link>
                  <Link
                    className="link-nav"
                    to={"/about-us"}
                    onClick={() => setExpanded(false)}
                  >
                    ¿Quiénes Somos?
                  </Link>
                  <Link
                    className="link-nav"
                    to={"/services"}
                    onClick={() => setExpanded(false)}
                  >
                    Servicios
                  </Link>
                  <Link
                    className="link-nav"
                    to={"/contact"}
                    onClick={() => setExpanded(false)}
                  >
                    Contacto
                  </Link>
                </Nav>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="wp__container">
        <a
          href="https://api.whatsapp.com/send/?phone=5493517886075"
          target="_blank"
          rel="noopener noreferrer"
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
