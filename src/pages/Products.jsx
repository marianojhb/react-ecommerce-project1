import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BotonAgregarProductoCart from '../components/BotonAgregarProductoCart';

const Products = ({ listadoDeProductos, cart, setCart }) => {
  return (
    <Container className="py-4">
      <h2 className="mb-4">Productos</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {listadoDeProductos.map((producto) => (
          <Col key={producto.id}>
            <Card className="h-100 shadow-sm">
              {producto.img && (
                <Card.Img
                  variant="top"
                  src={producto.img}
                  alt={producto.desc}
                  style={{ objectFit: 'cover', height: 160 }}
                />
              )}
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-1">{producto.desc}</Card.Title>
                <Card.Text className="text-muted mb-2">ID: {producto.id}</Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span className="fw-bold">${producto.precio?.toLocaleString?.() || producto.precio}</span>
                  <BotonAgregarProductoCart producto={producto} setCart={setCart} cart={cart} />
                </div>
              </Card.Body>
              {typeof producto.stock === 'number' && (
                <Card.Footer className="text-muted">Stock: {producto.stock}</Card.Footer>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
