import { ListItem, useDisclosure } from "@chakra-ui/core";
import CardProducts from "../card/CardProducts";

const Product = ({ product }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <ListItem display="flex" flexDirection={{ sm: "column", md: "row" }}>
      <CardProducts
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        product={product}
      />
    </ListItem>
  );
};

export default Product;
