import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from "react-bootstrap"


function CheckOut() {
    const { id } = useParams()
    return (
        <>
            <div>Gracias por comprar en Catito Store tu orden {id} ha sido procesada</div>
            <Link to={"/"}><Button style={{ width: "30%", backgroundColor: "green", border: "green" }}>Seguir Comprando</Button></Link>
        </>
    )
}

export default CheckOut