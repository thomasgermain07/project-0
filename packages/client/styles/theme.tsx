import { createTheme } from "@mui/material/styles";
import "./theme.d";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#DC5200",
      light: "#FFB833",
      dark: "#A33C00",
      contrastText: "#F5F5F5",
    },
    secondary: {
      main: "#202224",
      light: "#3D3D3E",
      dark: "#0A0A0B",
      contrastText: "#F5F5F5",
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
  typography: {
    h1: {
      fontSize: "60px",
      fontWeight: "bold",
    },
    h2: { fontSize: "50px" },
    h3: { fontSize: "40px" },
    h4: { fontSize: "30px" },
    h5: { fontSize: "20px" },
    button: { fontSize: "14px", fontWeight: "bold" },
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
