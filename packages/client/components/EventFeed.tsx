import Box from "@mui/material/Box";
import { useEventImages } from "../composables/useEventImages";
import { FeedPost } from "./FeedPost";

interface IEventFeedProps {
  eventId: string;
}

export function EventFeed({ eventId }: IEventFeedProps) {
  const { images } = useEventImages(eventId);

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {images &&
          images.map((image: any) => <FeedPost imageUrl={image.imageUrl} />)}
      </Box>
    </Box>
  );
}
