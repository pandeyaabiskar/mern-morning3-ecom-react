import { createContext } from "react";
import { useFetch } from "../utils/hooks";

export const ProductContext = createContext({});

export default function ProductProvider({ children }) {
  const {
    data: productData,
    isLoading,
    error,
  } = useFetch("http://localhost:4000/api/products");

  return (
    <ProductContext.Provider value={{ productData, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
}
