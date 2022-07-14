import type { NextPage, GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AppBarWrapper } from "../components/AppBarWrapper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { PageLayout } from "../styles/components/PageLayout";
import { CustomDivider } from "../styles/components/CustomDivider";
import { EventPreviewBand } from "../components/EventPreviewBand";
import { useEvents } from "../composables/useEvents";

const Homepage: NextPage = () => {
  const { t } = useTranslation("homepage");

  const { isLoading, events, nextEvent } = useEvents();

  return (
    <AppBarWrapper>
      <PageLayout sx={{ rowGap: "20px" }}>
        <Stack alignItems="center" sx={{ width: "100%" }}>
          <Typography variant="h3">{t("homepage.latestEvent")}</Typography>
          {!isLoading && events[0] && (
            <EventPreviewBand
              title={events[0].name}
              imageUrl={events[0].coverImageUrl}
              titleVariant="h2"
            />
          )}
        </Stack>
        <CustomDivider />

        <Stack alignItems="center" sx={{ width: "100%" }}>
          <Typography variant="h3">{t("homepage.nextEvent")}</Typography>
          {!isLoading && nextEvent && (
            <EventPreviewBand
              title={nextEvent.name}
              imageUrl={nextEvent.coverImageUrl}
              titleVariant="h2"
            />
          )}
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
