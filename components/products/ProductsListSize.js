import { Box } from "@chakra-ui/core";
import Notification from "../notifications/Notification";
const ProductListSize = ({ products }) => {
  return (
    <>
      {products.length === 1 ? (
        <Box ml={5}>
          <Notification
            text={`There is ${products.length} product`}
            status="error"
          />
        </Box>
      ) : (
        <Box ml={5}>
          <Notification
            text={`There are ${products.length} products`}
            status="success"
          />
        </Box>
      )}
    </>
  );
};

export default ProductListSize;
