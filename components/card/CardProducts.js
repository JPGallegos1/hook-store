import { Flex, Link } from "@chakra-ui/core";
import ModalProducts from "../modal/ModalProducts";
import CardContent from "./CardContent";

const CardProducts = ({ product, isOpen, onClose, onOpen }) => {
  return (
    <>
      <Flex
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        borderColor="gray.300"
        p={6}
        m="0 1rem"
        alignItems="center"
        flexDirection="column"
      >
        <CardContent product={product} />
        <Link onClick={onOpen}>Ver más información</Link>
        <ModalProducts onClose={onClose} isOpen={isOpen} product={product} />
      </Flex>
    </>
  );
};

export default CardProducts;
