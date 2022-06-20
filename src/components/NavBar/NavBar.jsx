import logo from "./main-logo-NavBar.png"
import "./navbar.css"
import Carrito from "../CartWidget/CartWidget"
import SearchBar from "../SearchBar/SearchBar"

const NavBar = () => {
    return (
        <>
            <nav className="NavBar-Top">
            <SearchBar/>
            <Carrito/>
            </nav>
            <nav className="NavBar-Middle">
                <a href="#top"><img src={logo} alt="logo" className="Main-Logo" /></a>
                <ul className="NavBar-Sections">
                    <li>Inicio</li>
                    <li>Alimentos</li>
                    <li>Juguetes</li>
                    <li>Indumentaria</li>
                    <li>Ropa Para Fans</li>
                    <li>Rescates</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                    <li>FAQ/Ayuda</li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
