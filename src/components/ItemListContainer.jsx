import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  query,
  where,
  collection,
} from "firebase/firestore";
import "../index.css";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  const { category } = useParams();

  console.log(productos);

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = category
      ? query(collection(db, "productos"), where("category", "==", category))
      : collection(db, "productos");

    getDocs(collectionRef)
      .then((response) => {
        const productosCategory = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(productosCategory);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  if (productos.length === 0) return <Loading />;

  return (
    <>
      <div className="greetingContainer">
        <p className="greeting">{greeting}</p>
        <video className="video" muted autoPlay loop>
          <source src="src/assets/images/fondos/lanas2.mp4" />
        </video>
        <div className="pageCover"></div>
      </div>
      <ItemList productos={productos} />
    </>
  );
}

export default ItemListContainer;
