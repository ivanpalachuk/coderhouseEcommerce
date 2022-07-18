import { createContext, useState } from "react";

//Creo el contexto

export const CartContext = createContext();

//Creo el componente

export function CartProvider({ children }) {

    const [itemsOnCart, setItemsOnCart] = useState([])
    //const [gtotal, setgTotal] = useState(0)

    const isInCart = (item) => {
        return (itemsOnCart.find(producto => producto.item.id === item.item.id) ? true : false)
    }

    const addItem = (item) => {
        let items = [...itemsOnCart]
        if (!isInCart(item)) {
            items.push(item);
        } else {
            let existingItem = itemsOnCart.find(producto => producto.item.id === item.item.id)
            existingItem.cantidad += item.cantidad;
        }
        setItemsOnCart(items)
    }

    const removeItem = (item) => {
        setItemsOnCart(itemsOnCart.filter(cartItem => cartItem.id !== item.id));
        // La negacion del id es importante. La funcion del filter te devuelve todos los elementos que cumplan con X condicion. Si no le hacemos la negacion, me va a devolver el único item que cumple con esa condicion, nosotros queremos que me devuelva el contrario.
    }

    const clear = () => {
        setItemsOnCart([])
    }

    // const grandTotal = () => {
    //     let total = 0
    //     for (let i = 0; i < itemsOnCart.length; i++) {
    //         total = itemsOnCart[i].precio += itemsOnCart.precio[i + 1]
    //     }
    //     setgTotal(total)
    //     return gtotal
    // }

    return (
        <CartContext.Provider value={[itemsOnCart, addItem, removeItem, clear, isInCart]}>
            {children}
        </CartContext.Provider>
    )
}












