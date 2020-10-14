import { ProductsProvider } from "../context/ProductsContext/ProductsContext";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer/footer";
import Main from "../components/layout/Main";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { CustomTheme } from "../styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <ProductsProvider>
        <CSSReset />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </ProductsProvider>
    </ThemeProvider>
  );
};

export default App;
