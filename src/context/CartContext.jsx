import { createContext, useState } from "react";

//Creo el contexto

export const CartContext = createContext();

//Creo el componente

export function CartProvider({ children }) {

    const [itemsOnCart, setItemsOnCart] = useState([])

    const isInCart = (item) => {
        return (itemsOnCart.find(producto => producto.item.id == item.item.id) ? true : false)
    }


    const addItem = (item) => {
        if (!isInCart(item)) {
            setItemsOnCart([...itemsOnCart, item])
        } else {
            console.log("Ya tenes eso en el carrito ameo")
        }
    }

    const removeItem = (item) => {

    }

    const clear = () => {
        setItemsOnCart([])
    }


    return (
        <CartContext.Provider value={[itemsOnCart, addItem, removeItem, clear, isInCart]}>
            {children}
        </CartContext.Provider>
    )
}












