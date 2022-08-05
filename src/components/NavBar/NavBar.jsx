import logo from "./main-logo-NavBar.png"
import "./navbar.css"
import Carrito from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav className="NavBar-Top">
                <Link to="/cart">
                    <Carrito />
                </Link>
            </nav>
            <nav className="NavBar-Middle">
                <Link to="/">
                    <img src={logo} alt="logo" className="Main-Logo" />
                </Link>
                <section className="NavBar-Sections">
                    <NavLink to="/" className={({ isActive }) => isActive ? "Section-button-activo" : "botonInactivo"}>Inicio</NavLink>
                    <NavLink to="/categoria/alimentos" className={({ isActive }) => isActive ? "Section-button" : "botonInactivo"}>Alimentos</NavLink>
                    <NavLink to="/categoria/juguetes" className={({ isActive }) => isActive ? "Section-button" : "botonInactivo"}>Juguetes</NavLink>
                    <NavLink to="/categoria/indumentaria" className={({ isActive }) => isActive ? "Section-button" : "botonInactivo"}>Indumentaria</NavLink>
                    <NavLink to="/categoria/ropa" className={({ isActive }) => isActive ? "Section-button" : "botonInactivo"}>Ropa Para Fanas</NavLink>
                    <NavLink to="/categoria/farmacia" className={({ isActive }) => isActive ? "Section-button" : "botonInactivo"}>Farmacia</NavLink>
                    <div className="Section-button">Rescates</div>
                    <div className="Section-button">Nosotros</div>
                    <div className="Section-button">Contacto</div>
                    <div className="Section-button">FAQ/Ayuda</div>
                </section>
            </nav>
        </>
    )
}

export default NavBar
