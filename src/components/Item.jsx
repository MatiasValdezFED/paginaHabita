import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../index.css";

function Item({ product }) {
  const { id, title, price, description, stock, imagen } = product;
  console.log(product);
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Body>
        <img src={imagen} alt={title} className="cardImg" />
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
