import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../index.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const db = getFirestore();

  const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setPhone(numericValue);
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
      await addDoc(msgsCollection, mensajeWeb);
      Toastify({
        text: "¡Mensaje Enviado!",
        className: "info",
        position: "center bottom",
        style: {
          background: "linear-gradient(to right, #f62a00, #f62a00)",
        },
      }).showToast();

      // Limpiar los campos del formulario después de enviar
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      Toastify({
        text: "Error al enviar el mensaje.",
        className: "info",
        position: "center bottom",
        style: {
          background: "linear-gradient(to right, red, red)",
        },
      }).showToast();
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
            onChange={(e) => setName(e.target.value)}
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
        <button type="submit" className="submit-btn">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
