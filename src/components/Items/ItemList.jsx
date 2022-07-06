//Dependencias
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom"
//Componentes
import Task from '../Helpers/Task';
import Item from './Item';
//Estetica
import { CardGroup } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

function ItemList() {

    const [items, setItems] = useState([])//Inicializo lo que quiero setear
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()



    useEffect(() => {
        if (categoria) {
            Task
                .then((res) => {
                    setItems(res.filter(item => item.categoria === categoria));
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        } else {
            Task
                .then((res) => {
                    setItems(res);
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }

    }, [categoria])//Cuando me resuelve la promesa, seteo la respuesta como los items, realizo catch para potenciales errores


    return (loading ?
        <div> Bancame que ahi carga amigo</div> :
        <CardGroup>
            {items.map((item) => {
                return <Item id={item.id} foto={item.foto} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} key={item.id} />
            })}
        </CardGroup >//Itero el array items, y paso cada item como prop del Item que genere, me cersioro que los campos que entran como prop sean los mismos"
    )
}
export default ItemList