import { createTheme } from "@mui/material/styles";
import "./theme.d";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB833",
      light: "#FFCD70",
      dark: "#CC8500",
    },
    secondary: {
      main: "#DC5200",
      light: "#FF8B47",
      dark: "#A33C00",
    },
    success: {
      main: "#66bb6a",
      light: "#81c784",
      dark: "#388e3c",
    },
    error: {
      main: "#B80000",
      light: "#FF1F1F",
      dark: "#8F0000",
    },
    neutral: {
      main: "#202224",
      light: "#D6D6D6",
      dark: "#131416",
    },
    background: {
      default: "#D6D6D6",
    },
  },
});
