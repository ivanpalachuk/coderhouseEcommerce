import { Button } from "react-bootstrap"
import { useState } from "react"

function ItemCount({ stock, initial, onAdd }) {

    console.log(initial)
    const [count, setCount] = useState(initial)

    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };

    const disminuir = () => {
        if (count > initial) {
            setCount(count - 1)
        }

    };

    return (
        <>
            Elegi la cantidad
            <span onClick={aumentar}>+</span>
            <span>{count}</span>
            <span onClick={disminuir}>-</span>
            <Button disabled={count === 0} variant="primary" onClick={() => onAdd(count)}>{!initial > 0 ? "Agregar al carrito" : "Modificar Cantidad"}</Button>
        </>
    )
}

export default ItemCount