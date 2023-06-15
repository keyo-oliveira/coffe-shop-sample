import React, { useContext, createContext } from "react";

interface CartContextProps {
  data: Partial<maybeProduct[]> | undefined;
  isLoading: boolean;
  error: unknown;
}

const CartContext = createContext<Partial<CartContextProps>>(
  {} as CartContextProps
);

export const CartContextProvider = ({ children }: any) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "CartContext must be used inside a product context provider."
    );
  }

  return context;
};
