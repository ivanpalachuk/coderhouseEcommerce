import { useContext, useState } from "react"
import { Card, Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"


function ItemDetail(props) {

    const [itemsOnCart, addItem, removeItem, clear, isInCart] = useContext(CartContext)
    const [cantidad, setCantidad] = useState()


    const funcionContador = (contador) => {
        setCantidad(contador)
        const productToCart = { item: props.item, cantidad: contador }
        addItem(productToCart)
        console.log(isInCart(productToCart))

    }

    console.log("El carrito tiene", itemsOnCart)

    return (
        <Card style={{ width: '18rem' }} key={props.item.id}>
            <Card.Img variant="top" src={props.item.foto} />
            <Card.Body>
                <Card.Title>{props.item.nombre}</Card.Title>
                <Card.Text>
                    {props.item.descripcion}
                </Card.Text>
                <Card.Text>
                    ${props.item.precio}
                </Card.Text>
                <Card>
                    {cantidad ? <Link to={"/cart"}><Button>Terminar la compra</Button></Link> : <ItemCount stock={props.item.stock} initial={0} onAdd={funcionContador} />}
                </Card>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail