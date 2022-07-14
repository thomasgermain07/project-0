import { Box } from "@mui/material";
import { BoxProps, styled } from "@mui/system";

export const PageLayout = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "20px",
  marginBottom: "20px",
}));
