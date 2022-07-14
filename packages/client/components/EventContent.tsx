import { CustomPaper } from "../styles/components/CustomPaper";
import GridOnIcon from "@mui/icons-material/GridOn";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import Stack from "@mui/material/Stack";
import Box from "@mui/system/Box";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useTheme } from "@mui/material";
import { EventFeed } from "./EventFeed";

interface IEventContentProps {
  eventId: string;
}

export function EventContent({ eventId }: IEventContentProps) {
  const { palette } = useTheme();
  const [displayMode, setDisplayMode] = useState<"feed" | "grid">("feed");

  return (
    <CustomPaper
      sx={{
        flex: "5",
        height: "100%",
        backgroundColor: "secondary.light",
        display: "flex",
      }}
    >
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        {displayMode === "feed" && <EventFeed eventId={eventId} />}
        {displayMode === "grid" && <div>grid</div>}
      </Box>
      <Stack
        borderLeft={`2px solid ${palette.secondary.contrastText}`}
        paddingLeft="8px"
      >
        <IconButton
          onClick={() => setDisplayMode("grid")}
          sx={{ color: "inherit" }}
        >
          <GridOnIcon />
        </IconButton>
        <IconButton
          onClick={() => setDisplayMode("feed")}
          sx={{ color: "inherit" }}
        >
          <SplitscreenIcon />
        </IconButton>
      </Stack>
    </CustomPaper>
  );
}
