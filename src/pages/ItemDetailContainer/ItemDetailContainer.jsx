import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [detail, setItemDetail] = useState([])
    
    // Esta función (getItem) ejecuta una promesa que va a tardar 2seg en resolverse y traer la data
    // Ahora creo un useEffect para montar el componente. Recibe como callback un response que va a 
    // ejecutar la actualización del ItemDetail

    const db = getFirestore();
    const queryDoc = doc(db, 'items', id);
    
    useEffect(() => {
        getItem()
    }, [id]);
    
    const getItem = () => {
        getDoc(queryDoc) // me retorna promise
        .then((response) => {
            setItemDetail(response.data());
            console.log(response.data())
        })
        .catch((error) => console.log(error));
    }

    // El componente me devuelve el componente ItemDetail que va a recibir como prop el estado detail del useState
  return (
        <>
           { detail &&  <ItemDetail detail = {detail} />}
        </>
  )
}

export default ItemDetailContainer;