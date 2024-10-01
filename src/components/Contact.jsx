import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../index.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import emailjs from "emailjs-com"; // Agrega esta línea y oprevio instalar esto npm install emailjs-com
import Spinner from "react-bootstrap/Spinner"; // NUEVO: Importamos Spinner de react-bootstrap

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // NUEVO: Estado para manejar el estado de carga

  const db = getFirestore();

  const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setPhone(numericValue);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    // Verificar que el valor no contenga números
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !message) {
      let errorMessage = "Por favor, complete todos los campos obligatorios.";

      if (!phone) {
        errorMessage = "El campo de teléfono es obligatorio.";
      } else if (!email) {
        errorMessage = "El campo de correo electrónico es obligatorio.";
      }

      Toastify({
        text: errorMessage,
        className: "info",
        position: "center bottom",
        style: {
          background: "linear-gradient(to right, red, red)",
        },
      }).showToast();
      return;
    }

    if (!emailValidation.test(email)) {
      Toastify({
        text: "¡El correo electrónico no es válido!",
        className: "info",
        position: "center bottom",
        style: {
          background: "linear-gradient(to right, red, red)",
        },
      }).showToast();
      return;
    }

    const mensajeWeb = {
      name,
      phone,
      email,
      message,
      Fecha: new Date().toLocaleString(),
    };

    const msgsCollection = collection(db, "mensajesWeb");

    try {
      setIsLoading(true); // NUEVO: Activar el spinner cuando se inicie el proceso de envío
      await addDoc(msgsCollection, mensajeWeb);

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // NUEVO: Enviar correo con EmailJS
      const templateParams = {
        from_name: name,
        to_name: "Cliente", // Reemplaza con el nombre de tu cliente
        phone,
        email,
        message,
      };

      emailjs
        .send(
          "service_id_habita",
          "template_id_habita",
          templateParams,
          "H45hs3RJ60sQP5Man"
        )
        .then((response) => {
          console.log(
            "Correo enviado exitosamente:",
            response.status,
            response.text
          );
        });

      ////////////////////////////////////

      // Limpiar los campos del formulario después de enviar
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");

      // NUEVO: Mantener el spinner activo por 2 segundos después de enviar el mensaje
      setTimeout(() => {
        setIsLoading(false); // Desactivar el spinner después de 2 segundos
        // NUEVO: Mostrar el mensaje de éxito después de que se desactive el spinner
        Toastify({
          text: "¡Mensaje Enviado!",
          className: "info",
          position: "center bottom",
          style: {
            background: "linear-gradient(to right, #f62a00, #f62a00)",
          },
        }).showToast();
      }, 2000);
    } catch (error) {
      // NUEVO: Mantener el spinner activo por 2 segundos incluso si hay un error
      setTimeout(() => {
        setIsLoading(false); // Desactivar el spinner después de 2 segundos
        // NUEVO: Mostrar el mensaje de error después de que se desactive el spinner
        Toastify({
          text: "Error al enviar el mensaje.",
          className: "info",
          position: "center bottom",
          style: {
            background: "linear-gradient(to right, red, red)",
          },
        }).showToast();
      }, 2000);
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="containerContact">
      <h1 className="title">Comunicate con nosotros</h1>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="row">
          <input
            type="text"
            placeholder="Nombre"
            className="input"
            value={name}
            onChange={handleNameChange} // Cambiado a handleNameChange, antes era asi -> onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className="input"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input
            type="email"
            placeholder="Correo"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Mensaje"
          className="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {" "}
          {/* NUEVO: Desactivamos el botón cuando el spinner está activo */}
          {isLoading ? ( // NUEVO: Mostrar spinner si está en proceso de envío
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </div>
  );
}

export default Contact;
