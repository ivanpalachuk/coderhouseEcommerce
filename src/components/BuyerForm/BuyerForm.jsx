import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import CheckOut from "../CheckOut/CheckOut"



function BuyerForm() {

    const { itemsOnCart, clear } = useContext(CartContext)

    const [buyerData, setBuyerData] = useState({
        buyerName: "",
        buyerEmail: "",
        buyerEmailValidation: "",
        buyerPhone: "",
    })

    const [orderId, setOrderId] = useState()
    const navigate = useNavigate();

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

        const db = getFirestore()
        const queryInsertOrder = collection(db, "orders")
        addDoc(queryInsertOrder, order)
            .then(res => setOrderId(res.id))
            .catch(err => console.log(err))
            .finally(() => clear())
        navigate("/cart/checkout", { state: orderId })
    }

    const onHandlerSubmit = (e) => {
        e.preventDefault()
        buyerData.buyerEmail === buyerData.buyerEmailValidation ? placeOrder() : alert("Los Email no coinciden")
    }


    const onHandleChange = (e) => {
        setBuyerData({
            ...buyerData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div style={{ border: "black 3px solid", width: "350px" }}>
            <form onSubmit={onHandlerSubmit}>
                <div>
                    <label>
                        Nombre:
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
                        Validar Email:
                        <input
                            type="email"
                            name="buyerEmailValidation"
                            placeholder="Por favor, repita el mail"
                            value={buyerData.buyerEmailValidation}
                            onChange={onHandleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Telefono:
                        <input
                            type="number"
                            name="buyerPhone"
                            placeholder="Telefono"
                            value={buyerData.buyerPhone}
                            onChange={onHandleChange}
                        />
                    </label>
                </div>
                <button type="submit">Generar una orden</button>
            </form>
            <div>
                {orderId && <div> Gracias, {buyerData.buyerName} por confiar en Catito Store el codigo de su orden es: {orderId}</div>}
            </div>
        </div>
    )

}
export default BuyerForm




