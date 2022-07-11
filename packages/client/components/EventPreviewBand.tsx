import { SxProps } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Variant } from "@mui/material/styles/createTypography";
import Typography from "@mui/material/Typography";
import { BandImage } from "./BandImage";

interface IEventPreviewProps {
  title: string;
  imageUrl: string;
  sx?: SxProps;
  titleVariant?: Variant;
  onClick?: () => void;
}

export function EventPreviewBand({
  title,
  imageUrl,
  sx,
  titleVariant,
  onClick,
}: IEventPreviewProps) {
  return (
    <Stack alignItems="center" sx={{ width: "100%", ...sx }}>
      <Typography variant={titleVariant || "h3"}>{title}</Typography>
      <BandImage imageUrl={imageUrl} onClick={onClick} />
    </Stack>
  );
}
