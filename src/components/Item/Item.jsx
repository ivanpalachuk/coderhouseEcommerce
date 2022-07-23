import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./item.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

function Item(props) {

    const { removeItem } = useContext(CartContext)


    const funcionEliminar = () => {
        const productToRemove = props.id
        removeItem(productToRemove)
    }


    return (
        <Card style={{ width: '18rem', padding: "1rem", margin: "15px", marginTop: "-150px" }} key={props.id}>
            <Card.Img variant="top" src={props.foto} sytle="height:50px" />
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Card.Text>
                    ${props.precio}
                </Card.Text>
                {!props.botonEliminar ?

                    <Link to={`/detail/${props.id}`}>
                        <Button variant="primary">Detalle del producto</Button>
                    </Link>

                    :

                    <Button variant="primary" onClick={funcionEliminar}>Eliminar del carrito</Button>}

                {props.cantidadInCart && <>
                    <div>Cantidad en carrito = {props.cantidadInCart}</div>
                    <div>Subtotal={props.subTotalItem}</div>
                    <ItemCount stock={props.stock} initial={props.cantidadInCart} onAdd={""} cambiaCantidad={props.cantidadInCart}></ItemCount>
                </>

                }

            </Card.Body>
        </Card>
    )

}

export default Item