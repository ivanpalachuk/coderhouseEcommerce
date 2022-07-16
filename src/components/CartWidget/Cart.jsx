import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { Alert, CardGroup, Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"
import Item from "../Items/Item"


function Cart() {
  const [itemsOnCart, clear] = useContext(CartContext)
  console.log(itemsOnCart)

  return (<>
    CARRO DE COMPRAS
    <CardGroup>
      {itemsOnCart.map((item) => {
        return <>
          <Item id={item.id} foto={item.foto} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} key={item.id}
            botonEliminar={true}>
          </Item>
        </>
      })}
    </CardGroup >
    <button onClick={clear}>Eliminar todos los articulos</button>
    <button >Ir a pagar</button>

  </>
  )
}

export default Cart