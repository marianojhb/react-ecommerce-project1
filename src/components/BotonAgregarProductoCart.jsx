const BotonAgregarProductoCart = ({ setCart, producto }) => {

  const handleAgregar = () => {

    // Evitar pasar el stock al carrito
    const { stock, ...safeProducto } = producto;

    setCart((prevCart) => {
        // Verificar si el producto ya está en el carrito
      const existe = prevCart.some((item) => item.id === safeProducto.id);

      // Si existe, incrementar la cantidad, si no, agregar el producto con cantidad 1
      const nuevoCart = existe
        ? prevCart.map((itemCart) =>
            itemCart.id === safeProducto.id ? { ...itemCart, cantidad: itemCart.cantidad + 1 } : itemCart
          )
        : [...prevCart, { ...safeProducto, cantidad: 1 }];

      return nuevoCart;
    });

  };

  return <button onClick={handleAgregar}>Agregar</button>;
};

export default BotonAgregarProductoCart;
