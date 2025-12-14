import vaciarCarrito from "../components/VaciarCarrito";

const Checkout = ({cart, setCart}) => {
  
  return (
    <>
        <h3>Productos en el carrito:</h3>

        {cart.length === 0 && <p>El carrito está vacío.</p>}

        {cart.length > 0 &&
        cart.map((itemCart, index) => {
            return (
                <div key={index}>
                    {itemCart.id} {itemCart.desc} Cantidad: {itemCart.cantidad}
                </div>
                )})}         
        {cart.length > 0 &&
          <div>
            <br />
            <button onClick={() => vaciarCarrito(setCart)}>Vaciar Carrito</button>
          </div>
        }


    </>
  );
};

export default Checkout;
