import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/Container/ItemListContainer"
import Footer from './components/Footer/Footer';
import "./assets/css/app.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/CartWidget/Cart';
import NotFound from './components/NotFound/NotFound';




function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/rescates" element={<ItemDetailContainer />} />
          <Route path="/about" element={<ItemDetailContainer />} />
          <Route path="/contact" element={<ItemDetailContainer />} />
          <Route path="/ayuda" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
