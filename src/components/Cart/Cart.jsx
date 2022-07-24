import { Link } from "react-router-dom"
import { useContext } from "react"
import { CardGroup, Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"
import Item from "../Item/Item"



function Cart() {
  const { itemsOnCart, clear, total } = useContext(CartContext)

  const nuevaOrden = () => {
    const user = { name: "ivan", telefono: 25521, email: "ivanzar@hotmai.com" }
    const itemParaOrden = [];
    itemsOnCart.map((articulo => {
      return itemParaOrden.push({item: articulo.id, title: articulo.nombre, price: articulo.precio })
    }))
    const order = { user, itemParaOrden }
    return console.log(order)
  }

  return (
    !itemsOnCart.length == 0 ?
      <>
        <CardGroup>
          {itemsOnCart.map((item) => {
            return <>
              <Item id={item.item.id} foto={item.item.foto} nombre={item.item.nombre} descripcion={item.item.descripcion} precio={item.item.precio} key={item.item.id}
                botonEliminar={true} cantidadInCart={item.cantidad} subTotalItem={item.item.precio * item.cantidad}>
              </Item>
            </>
          })}
        </CardGroup >

        <button onClick={clear}>Eliminar todos los articulos</button>
        <div>Total ${total}</div>
        <button onClick={nuevaOrden} >Ver funcion nuevaOrden</button>
      </>
      :
      <Link to="/"><Button>Navegar para ver mas articulos</Button></Link>
  )
}

export default Cart