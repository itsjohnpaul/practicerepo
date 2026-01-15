import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const reducer = (carts, action) => {
  switch (action.type) {
    case "Add":
      const exists = carts.find(item => item.id === action.payload.id);
      if (exists) {
        return carts.map(item =>
          item.id === action.payload.id ? {...item, quantity: item.quantity + 1 } : item );
      }
      return [...carts, { ...action.payload, quantity: 1 }];
    case "Delete":
      return carts.filter(item => item.id !== action.payload);
    case "increase":
      return carts.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "decrease":
      return carts.map(item =>
          item.id === action.payload? {...item, quantity: item.quantity - 1 } : item );
    default:
      return carts;
  }
};

export function CartProvider({ children }) {
  const [carts, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={{ carts, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
export default function useCartReducer() {
  return useContext(CartContext);
}
