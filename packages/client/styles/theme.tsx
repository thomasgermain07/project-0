import { createTheme } from "@mui/material/styles";
import "./theme.d";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#DC5200",
      light: "#FF8B47",
      dark: "#A33C00",
      contrastText: "#F5F5F5",
    },
    secondary: {
      main: "#D6D6D6",
      light: "#F5F5F5",
      dark: "#A3A3A3",
      contrastText: "#DC5200",
    },
    success: {
      main: "#66bb6a",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#F5F5F5",
    },
    error: {
      main: "#B80000",
      light: "#FF1F1F",
      dark: "#8F0000",
      contrastText: "#F5F5F5",
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
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});
