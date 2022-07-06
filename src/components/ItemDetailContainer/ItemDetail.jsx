import { Card } from "react-bootstrap"

function ItemDetail(item) {
    return (
        <Card style={{ width: '18rem' }} key={item.id}>
            <Card.Img variant="top" src={item.foto} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                    {item.descripcion}
                </Card.Text>
                <Card.Text>
                    ${item.precio}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail