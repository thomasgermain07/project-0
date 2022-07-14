import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/system";
import Image from "next/image";
import { FeedPostDetails } from "./FeedPostDetails";
import { SocialInteraction } from "./SocialInteraction";

interface IFeedPostProps {
  imageUrl: "";
}

export function FeedPost({ imageUrl }: IFeedPostProps) {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        width: "90%",
        height: "350px",
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        display: "flex",
      }}
    >
      <Box
        sx={{
          height: "350px",
          width: "75%",
          position: "relative",
          "& :hover": { cursor: "pointer" },
        }}
      >
        <Image src={imageUrl} layout="fill" objectFit="cover" />
      </Box>
      <Stack
        flex="1"
        flexDirection="column"
        sx={{ borderLeft: `3px solid ${palette.primary.main}` }}
      >
        <FeedPostDetails sx={{ flex: 5 }} />
        <SocialInteraction sx={{ flex: 1 }} />
      </Stack>
    </Box>
  );
}
