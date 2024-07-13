import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ producto, onAdd }) => {
  const [cantidad, setCount] = useState(0);

  const restar = () => {
    if (cantidad > 0) {
      setCount((cantidad) => cantidad - 1);
    }
  };

  const sumar = () => {
    if (cantidad < producto.stock) {
      setCount((cantidad) => cantidad + 1);
    }
  };

  return (
    <>
      <div className="counterButton">
        <Button
          className="plusLess"
          as="input"
          type="button"
          onClick={restar}
          value="-"
        />{" "}
        <p className="count">{cantidad}</p>
        <Button
          className="plusLess"
          as="input"
          type="button"
          onClick={sumar}
          value="+"
        />{" "}
      </div>
      <div className="addButton">
        <Button
          className=""
          as="input"
          type="button"
          onClick={() => cantidad > 0 && onAdd(cantidad)}
          disabled={cantidad === 0}
          value="Agregar al carrito"
        />
      </div>
    </>
  );
};

export default ItemCount;
