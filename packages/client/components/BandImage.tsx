import Box from "@mui/material/Box";
import Image from "next/image";

interface IBandPreviewProps {
  imageUrl: string;
  onClick?: () => void;
}

export function BandImage({ imageUrl, onClick }: IBandPreviewProps) {
  return (
    <Box
      sx={{
        height: "300px",
        width: "100%",
        position: "relative",
        "& :hover": { cursor: "pointer" },
      }}
      onClick={onClick}
    >
      <Image src={imageUrl} layout="fill" objectFit="cover" />
    </Box>
  );
}
