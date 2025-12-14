import { Navbar, Nav, Container } from 'react-bootstrap';
import IconCart from './IconCart';
import { Link } from 'react-router-dom';

const Navegacion = ({ menu, links, linkCheckout, cart }) => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Sitio de Compras</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {menu.map((nombre, index) => (
                <Nav.Link key={index} as={Link} to={links[index]}>
                  {nombre}
                </Nav.Link>
              ))}
            </Nav>

            <IconCart cart={cart} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegacion;
