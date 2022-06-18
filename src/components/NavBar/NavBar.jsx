import logo from "./main-logo-NavBar.png"
import "./navbar.css"
import Carrito from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <>
            <nav className="NavBar-Top">
            <search>"barra de busqueda"</search>
            <Carrito/>
            </nav>
            <nav className="NavBar-Middle">
                <img src={logo} alt="logo" className="Main-Logo" />
                <ul className="NavBar-Sections">
                    <li>Inicio</li>
                    <li>Alimentos</li>
                    <li>Juguetes</li>
                    <li>Indumentaria</li>
                    <li>Rescates</li>
                    <li>FAQ/Ayuda</li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
