import cart from "./png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png"
import "./CartWidget.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"


const Carrito = () => {
    const {itemsOnCart, addItem, removeItem, clear, isInCart} = useContext(CartContext)
    let contadorProductos = itemsOnCart.length

    return (

        <>
            {contadorProductos > 0 ? <span>{contadorProductos}</span> : ""}
            <img src={cart} className="Carrito" alt="icono Carrito" />
        </>
    )

}

export default Carrito