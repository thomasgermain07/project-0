import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette extends CustomPalette {
    neutral: {
      main: string;
      light: string;
      dark: string;
    };
  }

  interface PaletteOptions extends CustomPalette {
    neutral: {
      main: string;
      light: string;
      dark: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
