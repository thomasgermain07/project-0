import { useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { Event } from "../types/event";
import { BandImage } from "./BandImage";

interface IEventPreviewCardProps {
  event: Event;
  orientation: "right" | "left";
  onClick?: () => void;
}

export function EventPreviewCard({
  event,
  orientation,
  onClick,
}: IEventPreviewCardProps) {
  const { palette } = useTheme();

  const borderProps =
    orientation === "right"
      ? { borderLeft: `2px solid ${palette.secondary.contrastText}` }
      : { borderRight: `2px solid ${palette.secondary.contrastText}` };

  return (
    <Box
      sx={{
        width: "1200px",
        display: "flex",
        flexDirection: orientation === "left" ? "row" : "row-reverse",
        backgroundColor: "secondary.light",
        color: "secondary.contrastText",
        borderRadius: "10px",
      }}
    >
      <Stack
        sx={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          ...borderProps,
        }}
      >
        <Typography variant="h4">{event.name}</Typography>
        <Typography variant="h5">{event.location}</Typography>
        <Typography variant="h5">{event.date}</Typography>
      </Stack>
      <Box sx={{ flex: 5 }}>
        <BandImage imageUrl={event.coverImageUrl} onClick={onClick} />
      </Box>
    </Box>
  );
}
