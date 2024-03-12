import { createContext, useContext, useReducer } from "react";
export const Context = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("Provide a valid action.");
  }
}

export function useCartContext() {
  const value = useContext(Context);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
