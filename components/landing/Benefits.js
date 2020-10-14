import { Box, SimpleGrid } from "@chakra-ui/core";
import Layout from "../layout/Layout";
import Title from "../title";
import Hero from "../hero";

const benefits = [
  {
    label: "Easy to use",
    src: "img/mobile.svg",
    alt: "Easy to use",
  },
  { label: "Free to use", src: "img/account.svg", alt: "Free to use" },
  {
    label: "A lot of products",
    src: "img/products.svg",
    alt: "search bar",
  },
  {
    label: "A lot to search",
    src: "img/searchbar.svg",
    alt: "snacks y frutas",
  },
  { label: "Use your wishlist", src: "img/wishlist.svg", alt: "semana remota" },
  {
    label: "Or just pay for it",
    src: "img/payment.svg",
    alt: "últimas tecnologías",
  },
];

benefits.map((benefit) => {
  benefit.key = `nav-link-${benefit.label}-${benefit.src}`;
});

const Benefits = () => {
  return (
    <Box
      as="section"
      borderBottom="2px solid"
      borderColor="gray.200"
      w="90%"
      m="0 auto"
      pb="2rem"
    >
      <Layout
        as="div"
        align="center"
        backgroundColor="white"
        p="0 2rem 0 2rem"
        flexDirection="column"
      >
        <Title
          as="h2"
          fontSize="2rem"
          flex="0 0 35%"
          pt="5rem"
          textAlign={{ sm: "center", md: "left" }}
          fontWeight="medium"
        >
          Here you can see our benefits 😉
        </Title>
        <SimpleGrid
          as="ul"
          minChildWidth="90px"
          spacing="40px"
          justify="space-between"
          align="center"
          w="100%"
          pt="5rem"
        >
          {benefits.map(({ key, label, src, alt }) => (
            <Layout
              as="li"
              key={key}
              justify="space-between"
              align="center"
              flexDirection="column"
              h="20rem"
            >
              <Hero src={src} alt={alt} mb={4} h="10rem" w="100%" />

              <Box textAlign="center">{label}</Box>
            </Layout>
          ))}
        </SimpleGrid>
      </Layout>
    </Box>
  );
};

export default Benefits;
