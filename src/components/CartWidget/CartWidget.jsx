import cart from "./png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png"
import "./CartWidget.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"



const Carrito = () => {
    const { itemsOnCart } = useContext(CartContext)
    let contadorProductos = itemsOnCart.length
    console.log(itemsOnCart)

    return (

        <>
            {contadorProductos > 0 ? <span style={{ color: "gray", fontSize: "30px", borderRadius: "25%", border: "solid 2px black", textAlign: "center" }}>{contadorProductos}</span> : ""}
            <img src={cart} className="Carrito" alt="icono Carrito" />
        </>
    )

}

export default Carrito