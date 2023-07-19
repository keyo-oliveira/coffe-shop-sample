import React, { useContext, createContext } from "react";
import { useQuery } from "react-query";
import { getProduct } from "../../utils";

interface ProductContextProps {
  data: maybeProduct[]  | undefined;
  isLoading: boolean;
  error: unknown;
}

const ProductContext = createContext<Partial<ProductContextProps>>(
  {} as ProductContextProps
);

export const ProductContextProvider = ({ children }: any) => {
  const { data, isLoading, error } = useQuery<maybeProduct[]>(["getProduct"], () =>
    getProduct()
  );

  return (
    <ProductContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProductContext must be used inside a product context provider."
    );
  }

  return context
};
