import { toast } from 'react-toastify';

const BotonAgregarProductoCart = ({ setCart, producto, cart }) => {
  const handleAgregar = () => {
    // Considerar stock y mantenerlo en el carrito para validaciones
    const safeProducto = {
      ...producto,
      stock: Number.isFinite(producto.stock) ? producto.stock : Infinity,
      img: producto.img,
    };
    let showNoStock = false;

    // Pre-check: si ya está al máximo, avisar y salir
    const currentItem = cart?.find?.((i) => i.id === safeProducto.id);
    const currentQty = currentItem?.cantidad || 0;
    if (currentQty >= safeProducto.stock) {
      toast.warning('Stock máximo alcanzado para este producto');
      return;
    }
    setCart((prevCart) => {
      // Verificar si el producto ya está en el carrito
      const existe = prevCart.some((item) => item.id === safeProducto.id);

      // Si existe, incrementar la cantidad, si no, agregar el producto con cantidad 1
      const nuevoCart = existe
        ? prevCart.map((itemCart) => {
            if (itemCart.id !== safeProducto.id) return itemCart;
            const maxQty = Number.isFinite(itemCart.stock) ? itemCart.stock : Infinity;
            const currentQty = itemCart.cantidad || 0;
            const desiredQty = currentQty + 1;
            const nextQty = Math.min(maxQty, desiredQty);
            if (desiredQty > maxQty) {
              showNoStock = true; // marcar para toastear fuera del updater
            }
            return { ...itemCart, cantidad: nextQty };
          })
        : [...prevCart, { ...safeProducto, cantidad: 1 }];

      return nuevoCart;
    });

    if (showNoStock) {
      toast.info('No hay más stock disponible para este producto.');
    } else {
      toast.success('Producto agregado al carrito');
    }
  };

  return <button onClick={handleAgregar}>Agregar</button>;
};

export default BotonAgregarProductoCart;
