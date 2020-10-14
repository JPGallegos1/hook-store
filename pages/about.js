import {
  List,
  ListItem,
  ListIcon,
  Flex,
  Box,
  Heading,
  Image
} from "@chakra-ui/core";

const About = () => {
  return (
    <Box as="section">
      <Heading as="h2" textAlign="center" my={8}>
        This little example was built with:
      </Heading>
      <Flex justifyContent="space-around" w="80%" m="0 auto">
        <List
          spacing={8}
          flex="0 0 60%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            Semantic HTML
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            CSS & Styled Component
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            JavaScript
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            React
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            Next.js
          </ListItem>
        </List>

        <Flex flexDirection="column" justifyContent="space-between">
          <Image src="img/next.svg" alt="Next JS" />
          <Image src="img/react.svg" alt="React JS" />
        </Flex>
      </Flex>

      <Box w="80%" m="4rem auto">
        <Image src="img/frontend.svg" alt="Frontend Development" w="100%" />
      </Box>
    </Box>
  );
};

export default About;
