import { useState } from 'react';
import './App.css';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Navegacion from './components/NavBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const listadoDeProductos = [
    {
      id: 1,
      desc: 'Medias',
      stock: 10,
      precio: 150,
    },
    {
      id: 2,
      desc: 'Zapatos',
      stock: 5,
      precio: 350,
    },
    {
      id: 3,
      desc: 'Pantalones',
      stock: 30,
      precio: 500,
    },
  ];

  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <div>
          <Navegacion cart={cart} />
          <Routes>
            <Route path="/" element={<Home />} />
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
