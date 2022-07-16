import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./item.css"

function Item(props) {

    return (
        <Card style={{ width: '18rem' }} key={props.id}>
            <Card.Img variant="top" src={props.foto} sytle="height:50px" />
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Card.Text>
                    ${props.precio}
                </Card.Text>
                {props.botonEliminar ?
                    <Button variant="primary">Eliminar del carrito</Button>
                    : <Link to={`/detail/${props.id}`}>
                        <Button variant="primary">Detalle del producto</Button>
                    </Link>}
            </Card.Body>
        </Card>
    )

}

export default Item