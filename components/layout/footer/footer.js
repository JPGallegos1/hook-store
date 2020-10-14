import Layout from "../layout";
import Title from "../../title";
import { Heading } from "@chakra-ui/core";
import FooterButton from "./footerButton";

const Header = () => {
  return (
    <Layout
      as="footer"
      flexDirection="column"
      align="center"
      justify="space-between"
      p="1.5rem 2rem 0 2rem"
      backgroundImage="url('img/bg_footer.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center center"
      h="80vh"
    >
      <Layout
        as="div"
        flexDirection="column"
        justify="space-around"
        flex="0 0 50%"
        align="center"
      >
        <Title
          as="h2"
          fontSize={{ sm: "2.3rem", md: "3.3rem" }}
          textAlign={{ sm: "center" }}
          mb={{ sm: "1rem", md: "0" }}
          color="ecommerce.100"
        >
          Thanks to visit The Hook Store example!
        </Title>

        <Title
          as="h2"
          fontSize={{ sm: "1.6rem", md: "2.3rem" }}
          textAlign={{ sm: "center" }}
          mb={{ sm: "1rem", md: "0" }}
          fontWeight="medium"
        >
          Click on the link below to see the API.
        </Title>

        <FooterButton />
      </Layout>

      <Heading as="h3" textTransform="uppercase" size="md" mb={4}>
        Juan Pablo Gallegos @ 2020
      </Heading>
    </Layout>
  );
};

export default Header;
