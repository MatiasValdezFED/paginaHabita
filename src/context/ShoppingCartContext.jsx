import { createContext, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const CartContext = createContext({
  cart: [],
});

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, cantidad) => {
    if (!inCart(item.id)) {
      setCart((prev) => [...prev, { ...item, cantidad }]);
    } else {
      console.log("Error, el producto ya fue agregado");
    }
    console.log(inCart(item.id));
  };

  const eliminarItem = (itemId) => {
    const cartActualizado = cart.filter((producto) => producto.id !== itemId);
    setCart(cartActualizado);
    Toastify({
      text: "Producto Borrado",
      className: "info",
      position: "center bottom",
      style: {
        background: "linear-gradient(to right, black, black)",
      },
    }).showToast();
  };

  const limpiarCart = () => {
    setCart([]);
    Toastify({
      text: "Carrito Vaciado",
      className: "info",
      position: "center bottom",
      style: {
        background: "linear-gradient(to right, red, red)",
      },
    }).showToast();
  };

  const inCart = (itemId) => {
    return cart.some((producto) => producto.id === itemId);
  };

  const precioTotal = () => {
    return cart.reduce(
      (acc, producto) => acc + producto.price * producto.cantidad,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, eliminarItem, limpiarCart, precioTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
