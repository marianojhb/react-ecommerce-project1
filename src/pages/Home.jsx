import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ProductoCard from '../components/ProductoCard';


const Home = ({listadoDeProductos, cart, setCart}) => {
  return (
    <>
      <Container className="py-4">
        <h2 className="mb-3">Home</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {
          listadoDeProductos
            .filter(producto => producto.destacado === true)
            .map(producto => (
              <Col key={producto.id}>
                < ProductoCard producto = {producto}  cart={cart} setCart={setCart} />
              </Col>
            ))
            }
        </Row>
      </Container>
    </>
  );
};

export default Home;
