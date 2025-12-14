import { Navbar, Nav, Container } from 'react-bootstrap';
import IconCart from './IconCart';
import { Link } from 'react-router-dom';

const Navegacion = ({ cart }) => {

  const links = [
    {
      name: 'Acerca de',
      url: '/about',
    },
    {
      name: 'Contacto',
      url: '/contact',
    },
    {
      name: 'Productos',
      url: '/products',
    },
  ]

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            Sitio de Compras
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {links.map((link, index) => (
                <Nav.Link key={index} as={Link} to={link.url}>
                  {link.name}
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
