import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { FaCartShopping } from "react-icons/fa6";
import "../index.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const cartLength = () => {
    let cantidad = 0;
    cart.map((elem) => {
      cantidad += elem.cantidad;
    });
    return cantidad;
  };

  return (
    <div className="cart">
      <button className="carritoLogo">
        <FaCartShopping size={28} />
      </button>
      <span className="contadorCarrito">{cartLength()}</span>
    </div>
  );
};

export default CartWidget;
