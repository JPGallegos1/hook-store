import NextLink from "next/link";
import Layout from "../Layout";
import { Link, ListItem } from "@chakra-ui/core";

const NavList = () => (
  <>
    <Layout
      flexDirection={{ sm: "row" }}
      w={{ sm: "18rem", md: "30rem" }}
      justify="space-around"
      fontSize={{ sm: ".8rem", md: "1rem" }}
      p={{ sm: "1rem 0", md: "0" }}
    >
      <ListItem listStyleType="none">
        <NextLink href="/">
          <Link>Home</Link>
        </NextLink>
      </ListItem>

      <ListItem listStyleType="none">
        <NextLink href="/products">
          <Link>Products</Link>
        </NextLink>
      </ListItem>

      <ListItem listStyleType="none">
        <NextLink href="/about">
          <Link>About us</Link>
        </NextLink>
      </ListItem>
    </Layout>
  </>
);

export default NavList;
