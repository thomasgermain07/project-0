import type { NextPage, GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AppBarWrapper } from "../components/AppBarWrapper";
import { BandImage } from "../components/BandImage";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { PageLayout } from "../styles/components/PageLayout";

const CustomDivider = () => {
  return (
    <Divider
      sx={{
        width: "800px",
        alignSelf: "center",
        borderColor: "neutral.dark",
      }}
    />
  );
};

const Homepage: NextPage = () => {
  const { t } = useTranslation("homepage");

  const latestEvent = {
    id: "123",
    name: "Rally du Picodon",
    location: "Orange",
    date: "12-12-2022",
    coverImageUrl:
      "https://project0-images.s3.eu-west-3.amazonaws.com/events/1638987409561_image",
  };
  const nextEvent = {
    id: "123",
    name: "Rally du Gard",
    location: "Gard",
    date: "23-12-2022",
    coverImageUrl:
      "https://project0-images.s3.eu-west-3.amazonaws.com/events/1639492173895_image",
  };

  return (
    <AppBarWrapper>
      <PageLayout sx={{ rowGap: "20px" }}>
        <Stack alignItems="center">
          <Typography variant="h3">{t("latestEvent")}</Typography>
          <Typography variant="h2">{latestEvent.name}</Typography>
          <BandImage imageUrl={latestEvent.coverImageUrl} />
        </Stack>
        <CustomDivider />

        <Stack alignItems="center">
          <Typography variant="h3">{t("nextEvent")}</Typography>
          <Typography variant="h2">{nextEvent.name}</Typography>
          <BandImage imageUrl={nextEvent.coverImageUrl} />
        </Stack>
        <CustomDivider />
      </PageLayout>
    </AppBarWrapper>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "homepage"])),
    },
  };
}

export default Homepage;
