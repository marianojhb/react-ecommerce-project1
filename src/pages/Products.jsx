import { Container, Row, Col, Card } from 'react-bootstrap';
import BotonAgregarProductoCart from '../components/BotonAgregarProductoCart';

const Products = ({ listadoDeProductos, cart, setCart }) => {
  return (
    <>
      <Container>
        <h2>Pagina Productos</h2>
        {listadoDeProductos.map((producto, index) => {
          return (
            <div key={index}>
              {producto.id} {producto.desc} ... ${producto.precio}{' '}
              <BotonAgregarProductoCart producto={producto} setCart={setCart} />
            </div>
          );
        })}
        <hr />
      </Container>
    </>
  );
};

export default Products;
