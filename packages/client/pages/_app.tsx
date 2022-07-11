import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./../styles/theme.d";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
