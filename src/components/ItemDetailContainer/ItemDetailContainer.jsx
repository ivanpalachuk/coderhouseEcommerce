import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getFirestore,doc,getDoc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import Task from "../Helpers/Task"

function ItemDetailContainer() {

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState()
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryItem = doc(db, "productos", id)
        getDoc(queryItem)
        .then(res=>setItem({id:res.id, ...res.data()}))
        .catch(err => console.loh(err))
        .finally(()=>setLoading(false))
    }, [id, item])

    return (
        loading ? <div>Cargando el articulo para ver el detalle como un champeon</div> :

            <div><ItemDetail item={item} /></div>
    )
}


export default ItemDetailContainer