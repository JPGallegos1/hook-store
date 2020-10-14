import Layout from "../Layout";
import NavList from "./NavList";

const Nav = () => {
  return (
    <Layout as="nav" align="center">
      <Layout
        as="ul"
        justify="space-between"
        align="center"
        w={{ sm: "30rem" }}
        flexDirection={{ sm: "column", md: "row" }}
      >
        <NavList />
      </Layout>
    </Layout>
  );
};

export default Nav;
