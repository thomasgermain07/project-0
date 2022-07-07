import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "next-i18next";

interface IAppBarWrapperProps {
  children: React.ReactNode;
}

export function AppBarWrapper({ children }: IAppBarWrapperProps) {
  const { t } = useTranslation("common");

  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack flexDirection="row" justifyContent="flex-start" minWidth="25%">
            <Button>
              <Typography color="primary.contrastText">
                {t("appbar.event")}
              </Typography>
            </Button>
          </Stack>
          <Stack>
            <Typography
              onClick={() => {
                /* TODO: redirect to homepage */
              }}
              fontSize="40px"
              fontWeight="bold"
              color="primary.contrastText"
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
            >
              {t("title")}
            </Typography>
          </Stack>
          <Stack
            flexDirection="row"
            justifyContent="flex-end"
            minWidth="25%"
          ></Stack>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}
