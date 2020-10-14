import { Badge } from "@chakra-ui/core";

const CardBadge = ({ product }) => {
  return (
    <>
      <Badge rounded="full" px="2" variantColor="teal">
        $ {product.price}
      </Badge>
    </>
  );
};

export default CardBadge;
