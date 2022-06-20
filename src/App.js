import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/Container/ItemListContainer"
import Footer from './components/Footer/Footer';
import "./assets/css/app.css"

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto= "¡¡¡Articulos en breve!!!" />
      <Footer />
    </>
  );
}

export default App;
