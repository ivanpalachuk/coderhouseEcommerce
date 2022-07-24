//Dependencias
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDocs, collection, query, where } from 'firebase/firestore';
//Componentes
import Task from '../Helpers/Task';
import ItemList from "../ItemList/ItemList"


//Estetica


function ItemListContainer() {

    const [items, setItems] = useState([])//Inicializo lo que quiero setear
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()


    useEffect(() => {
        if (categoria) {
            const db = getFirestore()
            const queryItemList = collection(db, "productos")
            const queryItemListFilter = query(queryItemList, where("categoria", "==", categoria))
            getDocs(queryItemListFilter)
                .then(res => setItems(res.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            const db = getFirestore()
            const queryItemList = collection(db, "productos")
            getDocs(queryItemList)
                .then(res => setItems(res.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    }, [categoria])//Cuando me resuelve la promesa, seteo la respuesta como los items, realizo catch para potenciales errores


    return (loading ?
        <div> Bancame que ahi carga amigo</div> :
        <ItemList items={items}></ItemList>//Itero el array items, y paso cada item como prop del Item que genere, me cersioro que los campos que entran como prop sean los mismos"
    )
}

export default ItemListContainer


