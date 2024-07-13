import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../index.css";

const Cart = () => {
  const { cart, eliminarItem, limpiarCart, precioTotal } =
    useContext(CartContext);

  console.log(cart);

  const cantidadTotal = cart.length;

  console.log(cantidadTotal);

  if (cantidadTotal < 1) {
    return (
      <div className="cartActions">
        <h1>No hay productos en el carrito</h1>
        <button className="carritoFinalizar">
          <Link className="textFinalizar" to={"/"}>
            Ver productos
          </Link>
        </button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2 className="tituloCarrito">Carrito</h2>

        <div className="articulosCarrito">
          {cart.map((productoEnCarrito) => (
            <div key={productoEnCarrito.id} className="articuloCarrito">
              <img src={productoEnCarrito.imagen} className="carritoImagen" />
              <h3 className="artTitulo">{productoEnCarrito.title}</h3>
              <p>Cantidad: {productoEnCarrito.cantidad}</p>
              <p>Precio por unidad: ${productoEnCarrito.price}</p>
              <p>
                Subtotal: $
                {productoEnCarrito.cantidad * productoEnCarrito.price}
              </p>
              <button onClick={() => eliminarItem(productoEnCarrito.id)}>
                <FaRegTrashCan size={23} color="white" />
              </button>
            </div>
          ))}
        </div>
        <div className="cartActions">
          <h2>Precio Total: ${precioTotal()}</h2>
          <button className="carritoFinalizar" onClick={() => limpiarCart()}>
            Vaciar Carrito
          </button>
          <button className="carritoFinalizar">
            <Link className="textFinalizar" to={"/checkout"}>
              Finalizar Compra
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
