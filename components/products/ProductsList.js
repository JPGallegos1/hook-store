import { SimpleGrid } from "@chakra-ui/core";
import Product from "./Product";

const ProductsList = ({ products }) => {
  return (
    <>
      <SimpleGrid
        as="ul"
        minChildWidth="300px"
        spacing="40px"
        justify="space-between"
        align="center"
        w="100%"
        pt="5rem"
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductsList;
