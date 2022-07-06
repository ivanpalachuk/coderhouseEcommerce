import { Card } from "react-bootstrap"

function ItemDetail(props) {
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
            </Card.Body>
        </Card>
    )
}

export default ItemDetail