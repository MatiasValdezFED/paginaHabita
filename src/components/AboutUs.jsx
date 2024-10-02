import React from "react";
import "../index.css"; // Asegúrate de tener el CSS vinculado correctamente

function AboutUs() {
  return (
    <section className="about-container">
      {/* Elimina esta etiqueta de imagen */}
      {/* <img className="about-image" src="src/assets/images/about/aboutus.jpg" alt="About Us" /> */}

      <div className="background-overlay">
        <div className="whiteBar"></div>
      </div>

      {/* Título y descripción */}
      <div className="about-content">
        <h2 className="about-title">¿Quiénes Somos?</h2>
        <p className="about-description">
          Somos <strong>HABITA</strong>, tu socio{" "}
          <strong>inmobiliario integral</strong> en la provincia de Córdoba,
          Argentina. Nuestro equipo multidisciplinario de corredores
          inmobiliarios, abogados y arquitectos ofrece una gama completa de
          servicios que incluyen <strong>alquiler</strong> y{" "}
          <strong>venta</strong> de propiedades, administración de inmuebles,{" "}
          <strong>consultoría legal</strong> especializada, asesoramiento
          técnico constructivo y ejecución de obras.
        </p>
        <p className="about-description">
          Desde la consultoría legal hasta la ejecución de proyectos, estamos
          comprometidos a brindarte soluciones personalizadas y de alta calidad
          para todas tus necesidades inmobiliarias.
        </p>
      </div>

      <div className="team-section">
        <h3 className="team-title">Nuestro Equipo</h3>

        <div className="team-members">
          <div className="team-member">
            <div className="team-photo">
              <img src="src/assets/images/about/wiwi.jpg" alt="Guido Bordino" />
            </div>
            <h4 className="team-name">Dr Guido Bordino Somoza</h4>
            <p className="team-role">
              Abogado recibido de la Universidad Católica de Córdoba (UCC) con
              especialización en derecho inmobiliario.
            </p>
            <p className="team-role">
              Martillero y Corredor Inmobiliario recibido en la Universidad
              Nacional de Córdoba (UNC).
            </p>
          </div>

          <div className="team-member">
            <div className="team-photo">
              <img src="src/assets/images/about/negro.jpg" alt="Adrián Pérez" />
            </div>
            <h4 className="team-name">Arq Adrián Pérez</h4>
            <p className="team-role">
              Arquitecto recibido de la Universidad Nacional de Córdoba (FAUD -
              UNC) especializado en patologías de la construcción.
            </p>
            <p className="team-role">
              Agente inmobiliario diplomado en CPI Córdoba Capital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
