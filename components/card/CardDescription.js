import { Text } from "@chakra-ui/core";

const CardDescription = ({ product }) => {
  return (
    <>
      <Text
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml={2}
      >
        {product.title}
      </Text>
    </>
  );
};

export default CardDescription;
