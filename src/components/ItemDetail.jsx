import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "../index.css";

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);

  const [cantidadAñadida, setCantidad] = useState([0]);

  const agregarCantidad = (cantidad) => {
    setCantidad(cantidad);
    addItem(producto, cantidad);
    Toastify({
      text: "Producto Añadido",
      className: "info",
      position: "center bottom",
      style: {
        background: "linear-gradient(to right, #72002eff, #70566dff)",
      },
    }).showToast();
  };

  if (!producto) return <Loading />;

  return (
    <div>
      <div className="detailBack">
        <Card
          className="detail"
          style={{
            width: "45rem",
            padding: "70px",
          }}
        >
          <Card.Img
            src={producto.imagen}
            alt={producto.title}
            className="cardImgDetail"
            variant="top"
          />
          <div className="bodyDetail">
            <Card.Body>
              <Card.Title>{producto.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{producto.description}</ListGroup.Item>
              <ListGroup.Item>Stock: {producto.stock}</ListGroup.Item>
              <ListGroup.Item>${producto.price}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {cantidadAñadida > 0 ? (
                <div>
                  <button className="btnFinalizar">
                    <Link to={"/cart"} className="textFinalizar">
                      Ir al Carrito
                    </Link>
                  </button>
                  <button className="btnFinalizar">
                    <Link to={"/"} className="textFinalizar">
                      Seguir Comprando
                    </Link>
                  </button>
                </div>
              ) : (
                <ItemCount producto={producto} onAdd={agregarCantidad} />
              )}
            </Card.Body>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;
