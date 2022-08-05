import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


function BuyerForm() {

    const { itemsOnCart } = useContext(CartContext)

    const [buyerData, setBuyerData] = useState({
        buyerName: "",
        buyerEmail: "",
        buyerPhone: "",
    })

    const onHandlerSubmit = (e) => {
        e.preventDefault()

    }

    const onHandleChange = (e) => {
        setBuyerData({
            ...buyerData,
            [e.target.name]: e.target.value
        })
    }

    const placeOrder = () => {
        const order = {}
        order.buyer = buyerData
        order.productsToOrder = itemsOnCart.map(item => {
            const id = item.item.id
            const price = item.item.precio
            const title = item.item.nombre
            const quantity = item.quantity
            return { id, price, title, quantity }
        });
        console.log(order)
    }


    return (
        <div>
            <form onSubmit={onHandlerSubmit.placeOrder}>
                <div>
                    <label>
                        Nombre
                        <input
                            type="text"
                            name="buyerName"
                            placeholder="Nombre"
                            value={buyerData.buyerName}
                            onChange={onHandleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="buyerEmail"
                            placeholder="Email"
                            value={buyerData.buyerEmail}
                            onChange={onHandleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Telefono
                        <input
                            type="number"
                            name="buyerPhone"
                            placeholder="Telefono"
                            value={buyerData.buyerPhone}
                            onChange={onHandleChange}
                        />
                    </label>
                </div>
                <Link to="/cart/checkout"><button>Realizar Pedido</button></Link>
            </form>
            <button onClick={placeOrder}>Mostrar Orden en Consola</button>
        </div>
    )
}

export default BuyerForm




