import React from 'react'
import {Card , Button} from "react-bootstrap"


function Item(props) {
  return (
      <Card style={{ width: '18rem' }} key={props.id}>
          <Card.Img variant="top" src= {props.foto} />
          <Card.Body>
              <Card.Title>{props.nombre}</Card.Title>
              <Card.Text>
                  {props.descripcion}
              </Card.Text>
              <Card.Text>
                  ${props.precio}
              </Card.Text>
              <Button variant="primary">Agregar al Carrito</Button>
          </Card.Body>
      </Card>
  )
  
}

export default Item