import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Event } from "../types/event";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { FacebookShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CustomPaper } from "../styles/components/CustomPaper";

interface IEventDescriptionProps {
  event: Event;
}

export function EventDescription({ event }: IEventDescriptionProps) {
  const stackProps = {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const LocalDivider = () => (
    <Divider sx={{ width: "100%", borderColor: "secondary.contrastText" }} />
  );

  return (
    <CustomPaper
      sx={{
        flex: "1",
        height: "800px",
        minWidth: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Typography variant="h4" textAlign="center">
        {event.name}
      </Typography>
      <LocalDivider />
      <Stack sx={{ ...stackProps }}>
        <EventIcon fontSize="large" />
        <Typography variant="h5" textAlign="end">
          {event.date}
        </Typography>
      </Stack>
      <Stack sx={{ ...stackProps }}>
        <LocationOnIcon fontSize="large" />
        <Typography variant="h5" textAlign="end">
          {event.location}
        </Typography>
      </Stack>
      <LocalDivider />
      <Box sx={{ overflow: "scroll" }}>
        <Typography variant="h5" paragraph>
          {event.description}
        </Typography>
      </Box>
      <Stack sx={{ ...stackProps, justifyContent: "flex-end" }}>
        <FacebookShareButton url={window.location.href}>
          <FacebookIcon fontSize="large" />
        </FacebookShareButton>
        <IconButton color="inherit">
          <CopyToClipboard text={window.location.href}>
            <ContentCopyIcon fontSize="large" />
          </CopyToClipboard>
        </IconButton>
      </Stack>
    </CustomPaper>
  );
}
