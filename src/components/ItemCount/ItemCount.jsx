import { Button } from "react-bootstrap"
import { useState } from "react"

function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial)

    const increase = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };

    const decrease = () => {
        if (count > initial) {
            setCount(count - 1)
        }

    };

    return (
        <>
            Elegi la cantidad
            <span onClick={increase}>+</span>
            <span>{count}</span>
            <span onClick={decrease}>-</span>
            <Button disabled={count === 0} variant="primary" onClick={() => onAdd(count)}>{"Agregar al carrito"}</Button>
        </>
    )
}

export default ItemCount