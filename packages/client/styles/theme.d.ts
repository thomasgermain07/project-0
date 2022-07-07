import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette extends CustomPalette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions extends CustomPalette {
    neutral: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
