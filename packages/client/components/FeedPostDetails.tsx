import { SxProps, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTranslation } from "next-i18next";

interface IFeedPostDetailsProps {
  sx?: SxProps;
}

export function FeedPostDetails({ sx }: IFeedPostDetailsProps) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      <Typography variant="h4">{t("events.post.detailTitle")}</Typography>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">{t("events.post.pilotTitle")}</Typography>
        <Typography variant="h5" textAlign="center">
          test car pilot name a bit too long
        </Typography>
        <Typography variant="h4">{t("events.post.carTitle")}</Typography>
        <Typography variant="h5" textAlign="center">
          test car name
        </Typography>
      </Box>
    </Box>
  );
}
