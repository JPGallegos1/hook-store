import { Link, Box, PseudoBox, ListItem } from "@chakra-ui/core";
const FooterButton = () => (
  <>
    <ListItem as="li" listStyleType="none">
      <Box
        as="button"
        color="white"
        transition="all .3s ease"
        borderRadius="10rem"
      >
        <PseudoBox
          color="blue.300"
          border="1px solid"
          borderColor="white"
          p={2}
          w="12rem"
          borderRadius="10rem"
        >
          <Link href="https://fakestoreapi.com/docs" isExternal>
            Fake Store API
          </Link>
        </PseudoBox>
      </Box>
    </ListItem>
  </>
);

export default FooterButton;
