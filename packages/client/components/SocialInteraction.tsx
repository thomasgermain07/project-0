import Box, { BoxProps } from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { FacebookShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";

interface ISocialInteractionProps {
  sx?: BoxProps;
}

export function SocialInteraction({ sx }: ISocialInteractionProps) {
  const shareUrl = window.location.href + "imageIdTest";

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", ...sx }}>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon fontSize="large" />
      </FacebookShareButton>
      <IconButton color="inherit">
        <CopyToClipboard text={shareUrl}>
          <ContentCopyIcon fontSize="large" />
        </CopyToClipboard>
      </IconButton>
    </Box>
  );
}
