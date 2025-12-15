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
      img: 'https://fastly.picsum.photos/id/320/600/800.jpg?hmac=-6i2-GinGAdR7I9n1jH45aHwj-XzTU6jOjuGH57vgbE',
    },
    {
      id: 2,
      desc: 'Zapatos',
      stock: 5,
      precio: 350,
      img: 'https://fastly.picsum.photos/id/773/600/800.jpg?hmac=LnnX7dE5wbZ78GT9cipPYULuuqMvnnqvasYErcQYxlE',
    },
    {
      id: 3,
      desc: 'Pantalones',
      stock: 30,
      precio: 500,
      img: 'https://fastly.picsum.photos/id/439/600/800.jpg?hmac=JeTnMG7yR2zviIzqoYGpsxdpzwSxMCJZ8d-6cachhFQ',
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
