import { useState, useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/ShoppingCartContext";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Checkout = () => {
  const [apellido, setApellido] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const { cart, precioTotal } = useContext(CartContext);

  const db = getFirestore();

  const emailValidation = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setPhone(numericValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || !email || !repeatEmail) {
      Toastify({
        text: "Por favor, complete todos los campos obligatorios.",
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

    if (email !== repeatEmail) {
      Toastify({
        text: "Los correos electrónicos no coinciden.",
        className: "info",
        position: "center bottom",
        style: {
          background: "linear-gradient(to right, red, red)",
        },
      }).showToast();
      return;
    }

    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      setCart([]);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    Toastify({
      text: "¡Carrito Enviado!",
      className: "info",
      position: "center bottom",
      style: {
        background: "linear-gradient(to right, green, green)",
      },
    }).showToast();
  };

  const order = {
    apellido,
    name,
    phone,
    email,
    Carrito: cart,
    Total: precioTotal(),
    Fecha: new Date().toLocaleString(),
  };

  const ordersCollection = collection(db, "ordenes");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Apellido y Nombre</InputGroup.Text>
          <Form.Control
            aria-label="Apellido"
            onChange={(e) => setApellido(e.target.value)}
          />
          <Form.Control
            aria-label="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <InputGroup.Text>
            Teléfono<span class="campoObligatorio">*</span>
          </InputGroup.Text>
          <Form.Control
            aria-label="Teléfono"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
          />
          <InputGroup.Text>
            Email<span class="campoObligatorio">*</span>
          </InputGroup.Text>
          <Form.Control
            aria-label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputGroup.Text>
            Repita su Email<span class="campoObligatorio">*</span>
          </InputGroup.Text>
          <Form.Control
            aria-label="Repeat Email"
            type="email"
            onChange={(e) => setRepeatEmail(e.target.value)}
          />
          <button className="carritoFinalizar" type="submit">
            Enviar información
          </button>
        </InputGroup>
      </form>
      <p className="order">Número de orden: {orderId} </p>
      <h4 className="resumen">
        Su compra por un total de ${precioTotal()} es:
      </h4>
      <div className="articulosCarrito">
        {cart.map((productoEnCarrito) => (
          <div key={productoEnCarrito.id} className="articuloCarrito">
            <img src={productoEnCarrito.imagen} className="carritoImagen" />
            <h3 className="artTitulo">{productoEnCarrito.title}</h3>
            <p>Cantidad: {productoEnCarrito.cantidad}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
