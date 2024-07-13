import React from "react";
import Item from "./Item";
import "../index.css";

const ItemList = ({ productos }) => {
  return (
    <div className="productos__grid">
      {productos.map((product) => (
        <Item key={product.id} id={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
