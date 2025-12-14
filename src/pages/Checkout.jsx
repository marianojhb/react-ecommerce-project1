const Checkout = ({cart}) => {
  
  return (
    <>
        <h3>Productos en el carrito:</h3>

        {cart.length === 0 && <p>No hay items en el carrito.</p>}

        {cart.length > 0 &&
        cart.map((itemCart, index) => {
            return (
                <div key={index}>
                    {itemCart.id} {itemCart.desc} Cantidad: {itemCart.cantidad}
                </div>
                )})}         



    </>
  );
};

export default Checkout;
