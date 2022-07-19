import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./item.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function Item(props) {

    const { removeItem, clear, isInCart } = useContext(CartContext)

    return (
        <Card style={{ width: '18rem', padding: "1rem", marginTop: "-150px" }} key={props.id}>
            <Card.Img variant="top" src={props.foto} sytle="height:50px" />
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Card.Text>
                    ${props.precio}
                </Card.Text>

                {!props.botonEliminar && <Link to={`/detail/${props.id}`}>
                    <Button variant="primary">Detalle del producto</Button>
                </Link>}
                    <Button variant="primary" onClick={removeItem}>Eliminar del carrito</Button>
                     <Link to={`/detail/${props.id}`}>
                        <Button variant="primary">Detalle del producto</Button>
                    </Link>

                {props.cantidadInCart ?
                    <div>Cantidad en carrito = {props.cantidadInCart}</div> : <></>
                }
            </Card.Body>
        </Card>
    )

}

export default Item