import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { Alert, CardGroup, Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"
import Item from "../Items/Item"


function Cart() {
  const [itemsOnCart, addItem, removeItem, clear, isInCart] = useContext(CartContext)

  return (
    !itemsOnCart.length == 0 ?
      <>
        <CardGroup>
          {itemsOnCart.map((item) => {
            return <>
              <Item id={item.item.id} foto={item.item.foto} nombre={item.item.nombre} descripcion={item.item.descripcion} precio={item.item.precio} key={item.item.id}
                botonEliminar={true} cantidadInCart={item.cantidad}>
              </Item>
            </>
          })}
        </CardGroup >
        <button onClick={clear}>Eliminar todos los articulos</button>
        <button >Ir a pagar</button>
      </>
      :
      <Link to="/"><Button>Navegar para ver mas articulos</Button></Link>
  )
}

export default Cart