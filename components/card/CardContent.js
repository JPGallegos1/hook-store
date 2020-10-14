import { Box, Flex } from "@chakra-ui/core";
import CardBadge from "./CardBadge";
import CardDescription from "./CardDescription";
import CardFooter from "./CardFooter";
import CardLogo from "./CardLogo";

const CardContent = ({ product }) => {
  return (
    <>
      <CardLogo product={product} />

      <Box p="6">
        <Flex alignItems="baseline" m="0 auto">
          <CardBadge product={product} />

          <CardDescription product={product} />
        </Flex>
      </Box>

      <CardFooter product={product} />
    </>
  );
};

export default CardContent;
