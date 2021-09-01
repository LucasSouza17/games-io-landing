import "../styles/globals.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "../styles/theme/token";

const theme = extendTheme({colors})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
