import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import "../index.css";

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, "productos", id);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProducto(productAdapted);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return <ItemDetail producto={producto} />;
};

export default ItemDetailConteiner;
