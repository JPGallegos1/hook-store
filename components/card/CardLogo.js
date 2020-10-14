import { Image, Box } from "@chakra-ui/core";

const CardLogo = ({ product }) => {
  return (
    <>
      <Box w="20rem">
        <Image
          src={product.image}
          alt={product.title}
          h="8rem"
          p={6}
          m="0 auto"
        />
      </Box>
    </>
  );
};

export default CardLogo;
