import { useProductsContext } from "../context/ProductsContext/ProductsContext";
import Layout from "../components/layout/layout";
import SkeletonItem from "../components/skeleton";
import ProductTitle from "../components/products/ProductTitle";
import SearchBar from "../components/products/SearchBar";
import SortProducts from "../components/products/SortProducts";
import ProductsList from "../components/products/ProductsList";
import ProductsListSize from "../components/products/ProductsListSize";

const Products = () => {
  const {
    products,
    loading,
    setSearchProducts,
    setSortProducts
  } = useProductsContext();

  return (
    <Layout as="section" flexDirection={{ sm: "column" }}>
      {loading && <SkeletonItem />}

      <ProductTitle />
      <Layout m="0 auto">
        <SearchBar setSearchProducts={setSearchProducts} />

        <SortProducts setSortProducts={setSortProducts} />
      </Layout>

      <ProductsList products={products} />

      <ProductsListSize products={products} />
    </Layout>
  );
};

export default Products;
