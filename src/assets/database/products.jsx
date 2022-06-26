import imgAlimento from "../images/Alimento1kg.png"

const Products = () => {
    let productos = [
        { id: 1, nombre: "Alimento", precio: 1500, stock: true, foto: {imgAlimento}, descripcion: "Alimento de 1kg, ideal para tu gatito" },
        { id: 2, nombre: "Varilla", precio: 385, stock: true, foto: "src/assets/images/varilla.jpg", descripcion: "Varilla para jugar y dvivertirte con tu amigo peludo" },
        { id: 3, nombre: "Remera", precio: 2500, stock: true, foto: "src/assets/images/D_NQ_NP_2X_806185-MLA45697537803_042021-F.webp", descripcion: "Mostrale a todos tu fanatismo con esta remera" },
        { id: 4, nombre: "Collar", precio: 580, stock: true, foto: "src/assets/images/images.jfif", descripcion: "Nunca pierdas a tu gatito" },
        { id: 5, nombre: "Alimento 2kg", precio: 3000, stock: true, foto: "src/assets/images/D_NQ_NP_939690-MLA41500075234_042020-O.webp", descripcion: "Alimento 2kg balanceado para el michi" },
        { id: 6, nombre: "Desparasitario", precio: 300, stock: true, foto: "src/assets/images/descarga.png", descripcion: "Desparasitario por 500ml" },
        { id: 7, nombre: "Pulguicida", precio: 750, stock: true, foto: "src/ assets / images / descarga.png", descripcion: "¡Fuera pulgas!" },
        { id: 8, nombre: "Camas", precio: 6000, stock: true, foto: "src/assets/images/cama-iglu-para-gatos_1_g.jpeg", descripcion: "La mejor camita para el amigo peludin" }
    ]

    return (
        productos
    )
}

export default Products


