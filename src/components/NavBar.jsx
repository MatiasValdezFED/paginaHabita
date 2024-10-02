import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../index.css";
const NavBarHeight = 336;

function ColorSchemesExample() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef(false); // useRef para almacenar el valor de scroll

  const handleScroll = () => {
    const scrolled = window.scrollY >= NavBarHeight;
    console.log(scrolled, window.scrollY);

    // Actualiza el estado solo si es diferente al valor anterior
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
      <Navbar className={`nav`}>
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

          <Nav className="menu-container">
            <Nav className="menu-items-container">
              <Navbar.Brand href="/">
                <img
                  className={`img-logo image-small ${
                    isScrolled ? "displayed" : "hidden"
                  }`}
                  src="/logo.png"
                  alt="Habita Logo"
                />
              </Navbar.Brand>

              <Nav className="menu-items">
                <Link className="link-nav" to={"/"}>
                  Inicio
                </Link>
                <Link className="link-nav" to={"/about-us"}>
                  ¿Quiénes Somos?
                </Link>
                <Link className="link-nav" to={"/services"}>
                  Servicios
                </Link>
                <Link className="link-nav" to={"/contact"}>
                  Contacto
                </Link>
              </Nav>
            </Nav>
          </Nav>
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
