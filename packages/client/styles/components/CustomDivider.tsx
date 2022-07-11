import { Divider, DividerProps } from "@mui/material";
import { styled } from "@mui/system";

export const CustomDivider = styled(Divider)<DividerProps>(({ theme }) => ({
  width: "1200px",
  alignSelf: "center",
  borderColor: theme.palette.neutral.dark,
}));
