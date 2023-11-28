import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

// Para instalar react-icons npm i react-icons

export const Cart = () => {
    const [cartCount, setCartCount] = useState(2);
    console.log(setCartCount);

  return (
    <div>
        <div className="relative">
          <FaShoppingCart className="icono-carrito cursor-pointer" />
          <div className="absolute cursor-pointer flex items-center justify-center h-5 w-5 -top-3 -right-2 bg-red-500 rounded-full text-white text-center text-xs">
            {cartCount}
          </div>
        </div>
    </div>
  )
}

