import { createContext, useState } from "react";

//Creo el contexto

export const CartContext = createContext();

//Creo el componente

export function CartProvider({ children }) {
    const [itemsOnCart, setItemsOnCart] = useState([
        { id: 1, categoria: "alimentos", nombre: "Alimento", precio: 1500, stock: true, foto: "//http2.mlstatic.com/D_NQ_NP_2X_979327-MLA49656696525_042022-F.webp", descripcion: "Alimento de 1kg, ideal para tu gatito" },
        { id: 2, categoria: "juguetes", nombre: "Varilla", precio: 385, stock: true, foto: "https://http2.mlstatic.com/D_NQ_NP_2X_943108-MLA49323613286_032022-F.webp", descripcion: "Varilla para jugar y dvivertirte con tu amigo peludo" },
        { id: 6, categoria: "farmacia", nombre: "Desparasitario", precio: 300, stock: true, foto: "https://d2r9epyceweg5n.cloudfront.net/stores/019/016/products/meltra_spot_on_8kg_web-6413ad9949e4e534fa15121881431239-1024-1024.gif", descripcion: "Desparasitario por 500ml" },
        { id: 7, categoria: "farmacia", nombre: "Pulguicida", precio: 750, stock: true, foto: "http://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/1power-gato-4-a-8-kg1-fcb33ce4e938db343b15132701762905-640-0.jpg", descripcion: "¡Fuera pulgas!" },
        { id: 8, categoria: "indumentaria", nombre: "Camas", precio: 6000, stock: true, foto: "https://http2.mlstatic.com/D_NQ_NP_628787-MLA31356739630_072019-O.webp", descripcion: "La mejor camita para el amigo peludin" }
    ]
    )

    const addItem = item => {
        setItemsOnCart([...itemsOnCart, item])
    }
    const removeItem = () => {

    }
    const clear = () => {
        setItemsOnCart([])
    }
    const isInCart = (idBuscado) => {
        itemsOnCart.includes(idBuscado)
    }

    return (
        <CartContext.Provider value={[itemsOnCart, setItemsOnCart, addItem, removeItem, clear, isInCart]}>
            {children}
        </CartContext.Provider>
    )
}












