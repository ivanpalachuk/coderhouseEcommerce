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
                <section className="NavBar-Sections">
                    <div className="Section-button">Inicio</div>
                    <div className="Section-button">Alimentos</div>
                    <div className="Section-button">Juguetes</div>
                    <div className="Section-button">Indumentaria</div>
                    <div className="Section-button">Ropa Para Fans</div>
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
