import { createContext, useState } from "react";

//Creo el contexto

export const CartContext = createContext();

//Creo el componente

export function CartProvider({ children }) {

    const [itemsOnCart, setItemsOnCart] = useState([])

    const isInCart = (id) => {
    }
    const addItem = (item) => {
        setItemsOnCart(itemsOnCart.push(item))
    }
    const removeItem = (id) => { 
        
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












