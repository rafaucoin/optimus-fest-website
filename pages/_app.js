import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../styles/theme";
import Fonts from "../styles/fonts";
import Text from "../styles/globals.css";
import Layout from "../components/shared/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Fonts />
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
