import { createContext, useEffect, useContext, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { API, PRODUCTS_ENDPOINT } from "../../constants";

export const URL = `${API}/${PRODUCTS_ENDPOINT}`;
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [searchProducts, setSearchProducts] = useState("");
  const [sortProducts, setSortProducts] = useState("");
  const { getData, loading, response } = useFetch(URL);

  useEffect(() => {
    getData();
  }, []);

  const filterProducts = response.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchProducts.toLowerCase()) ||
      product.category.toLowerCase().includes(searchProducts.toLowerCase())
    );
  });

  const products = [...filterProducts].sort((a, b) => {
    return (
      (sortProducts === "ASC" && a.title.localeCompare(b.title)) ||
      (sortProducts === "DESC" && b.title.localeCompare(a.title))
    );
  });

  return (
    <ProductsContext.Provider
      value={{ products, loading, setSearchProducts, setSortProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export function useProductsContext () {
  const context = useContext(ProductsContext);

  if (!context) {
    console.log("Something's wrong with the data...");
  }

  return context;
}

export default useProductsContext;
