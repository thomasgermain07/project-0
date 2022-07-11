import { Paper, PaperProps, styled } from "@mui/material";

export const CustomPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: "20px",
  borderRadius: "15px",
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.secondary.contrastText,
}));
