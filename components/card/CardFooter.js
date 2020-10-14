import { Box } from "@chakra-ui/core";

const CardFooter = ({ product }) => {
  const productDescription = product.description.slice(0, 100);
  return (
    <>
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
        {productDescription}...
      </Box>
    </>
  );
};

export default CardFooter;
