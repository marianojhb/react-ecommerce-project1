import { Link } from 'react-router-dom';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { RiShoppingCart2Fill } from 'react-icons/ri';

const IconCart = ({ cart }) => {
  const totalItems = cart.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);

  return (
    <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="Ir al carrito">
      {totalItems > 0 ? (
        <div>
          <RiShoppingCart2Fill size={24} />
          &nbsp;&nbsp; Items:&nbsp;{totalItems}{' '}
        </div>
      ) : (
        <div>
          <RiShoppingCart2Line size={24} />
          &nbsp;&nbsp; Items:&nbsp;{totalItems}{' '}
        </div>
      )}
    </Link>
  );
};

export default IconCart;
