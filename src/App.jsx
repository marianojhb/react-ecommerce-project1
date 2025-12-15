import { useEffect, useState } from 'react';
import './App.css';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Navegacion from './components/NavBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  useEffect(() => {
    fetch('https://68ebcbd276b3362414ceb1d3.mockapi.io/api/v1/products')
      .then((res) => res.json())
      .then((json) => setListadoDeProductos(json));
  }, []);

  const [cargando, setCargando] = useState(false);
  const [listadoDeProductos, setListadoDeProductos] = useState([]);

  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <div>
          <Navegacion cart={cart} />
          <Routes>
            <Route path="/" element={<Home listadoDeProductos={listadoDeProductos} cart={cart} setCart={setCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/products"
              element={<Products listadoDeProductos={listadoDeProductos} cart={cart} setCart={setCart} />}
            />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
