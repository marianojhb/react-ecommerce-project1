import vaciarCarrito from '../components/VaciarCarrito';
import { Card, ListGroup, Button, Form } from 'react-bootstrap';

const Checkout = ({ cart, setCart }) => {
  const handleQtyChange = (id, qty) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, cantidad: qty } : p)));
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const total = cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <>
      <Container className="py-4">
        <h2 className="mb-3">Tu carrito</h2>

        <ListGroup className="mb-4">
          {cart.map((p) => (
            <ListGroup.Item key={p.id}>
              <Card className="border-0">
                <Card.Body className="p-0 ">
                  <div className="d-flex justify-content-between align-items-start gap-3 ">
                    <div className="d-flex gap-3 flex-grow-1">
                      {p.img && (
                        <img
                          src={p.img}
                          alt={p.desc}
                          style={{ objectFit: 'cover', height: 80, width: 80, borderRadius: 4 }}
                        />
                      )}
                      <div>
                        <div className="fw-semibold">{p.desc}</div>
                        <div className="text-muted text-start">${p.precio} c/u</div>
                      </div>
                    </div>

                    <Button variant="outline-danger" size="sm" onClick={() => handleRemove(p.id)}>
                      ✕
                    </Button>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3 ms-5 ps-3">
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => handleQtyChange(p.id, Math.max(1, (p.cantidad || 1) - 1))}
                        disabled={(p.cantidad || 1) <= 1}
                      >
                        −
                      </Button>

                      <span className="fw-semibold" style={{ minWidth: 24, textAlign: 'center' }}>
                        {p.cantidad}
                      </span>

                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => {
                          const nextQty = (p.cantidad || 1) + 1;
                          const maxStock = Number.isFinite(p.stock) ? p.stock : nextQty; // if stock missing, allow increment
                          handleQtyChange(p.id, Math.min(maxStock, nextQty));
                        }}
                        disabled={Number.isFinite(p.stock) ? (p.cantidad || 1) >= p.stock : false}
                      >
                        +
                      </Button>
                    </div>

                    <div className="fw-bold">${(p.precio * p.cantidad).toLocaleString()}</div>
                  </div>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Card className="shadow-sm">
          <Card.Body>
            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>

            <Button className="w-100" size="lg" disabled={cart.length === 0}>
              Ir a pagar
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Checkout;
