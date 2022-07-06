import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import Task from "../Helpers/Task"

function ItemDetailContainer() {

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState()
    const { id } = useParams()

    useEffect(() => {
        Task
            .then((res) => {
                console.log(id)//Checkeo que el param me llega
                setItem(res.find(x => x.id === id))// Seteo el item que me devuelve el Find
                console.log(res.find(x => x.id === 2))//Checkeando que la funcion Find me funciona; fozando el id
                console.log(item)//Checkeo cual fue el saldo de ese setItem
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [id,item])



    return (
        loading ? <div>Cargando el articulo para ver el detalle como un champeon</div> :

            <div><ItemDetail item={item} /></div>
    )
}


export default ItemDetailContainer