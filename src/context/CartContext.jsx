// CartContext.jsx
import { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const cartReducer = (state, action) => {
  let existingItem, updatedState;

  switch (action.type) {
    case "ADD_TO_CART":
      existingItem = state.find((item) => item.slug === action.payload.slug);

      if (existingItem) {
        return state;
      } else {
        const newState = [...state, { ...action.payload, quantity: 1 }];
        saveCartToLocalStorage(newState);
        return newState;
      }

    case "REMOVE_FROM_CART":
      updatedState = state.filter((item) => item.slug !== action.payload.slug);
      saveCartToLocalStorage(updatedState);
      return updatedState;

    case "ACTUALIZAR_CANTIDAD": {
      const { slug, quantity } = action.payload;
      updatedState = state.map((item) =>
        item.slug === slug ? { ...item, quantity } : item
      );
      saveCartToLocalStorage(updatedState);
      return updatedState;
    }

    case "RESET_CART":
      saveCartToLocalStorage([]); 
      return [];

    default:
      return state;
  }
};

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("itemsCart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("itemsCart", JSON.stringify(cart));
};

const CartProvider = ({ children }) => {
  const storedCart = loadCartFromLocalStorage();
  const initialState = storedCart.length > 0 ? storedCart : [];

  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
