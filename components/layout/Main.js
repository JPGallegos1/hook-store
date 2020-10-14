import Layout from "./Layout";
const Main = ({ children }) => {
  return (
    <Layout as="main" flexDirection="column">
      {children}
    </Layout>
  );
};

export default Main;
