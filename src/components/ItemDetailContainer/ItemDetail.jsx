import { useContext } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { CartContext } from "../context/CartContext"


function ItemDetail(props) {
    const [itemsOnCart, isInCart, addItem] = useContext(CartContext)

    console.log(itemsOnCart)

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
                    Cantidad
                    <input type="number" id="cantidad" name="cantidad"
                        min="1" max="100"></input>
                </Card>
                <Button onClick={() => isInCart(props.item.id) ? addItem(props.item) : Alert("Ya tenes este item en tu carrito")} variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail