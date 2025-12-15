import { Card } from 'react-bootstrap';
import BotonAgregarProductoCart from './BotonAgregarProductoCart';

const ProductoCard = ({ producto, cart, setCart }) => {
  return (
    <>
    <Card className="card border-light mb-3 h-100 " style={{ maxWidth: '20rem' }}>
      {producto.img && (
        <Card.Img variant="top" src={producto.img} alt={producto.desc} style={{ objectFit: 'cover', height: 160 }} />
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-1">{producto.desc}</Card.Title>
        <Card.Text className="text-muted mb-2">ID: {producto.id}</Card.Text>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">${producto.precio?.toLocaleString?.() || producto.precio}</span>

          <BotonAgregarProductoCart producto={producto} cart={cart} setCart={setCart} />
        </div>
      </Card.Body>

      {typeof producto.stock === 'number' && <Card.Footer className="text-muted">Stock: {producto.stock}</Card.Footer>}
    </Card>
    </>
  );
};

export default ProductoCard;
