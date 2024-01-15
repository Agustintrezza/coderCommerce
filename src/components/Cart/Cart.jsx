import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import {Tooltip} from 'react-tippy';

export const Cart = () => {
    const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
        <div className="relative">
          <Tooltip title="Tú Carrito">
          <FaShoppingCart className="icono-carrito cursor-pointer" />
          <div className="absolute cursor-pointer flex items-center justify-center h-5 w-5 -top-3 -right-2 bg-red-500 rounded-full text-white text-center text-xs">
          {cartCount}
          </div>
          </Tooltip>
        </div>
    </div>
  )
}

