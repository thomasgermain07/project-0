import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./../styles/theme.d";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
