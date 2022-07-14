import { GetStaticPropsContext, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AppBarWrapper } from "../../components/AppBarWrapper";
import { PageLayout } from "../../styles/components/PageLayout";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { CustomDivider } from "../../styles/components/CustomDivider";
import { EventPreviewBand } from "../../components/EventPreviewBand";
import { EventPreviewCard } from "../../components/EventPreviewCard";
import { useRouter } from "next/router";
import { useEvents } from "../../composables/useEvents";
import { Event } from "../../types/event";

const Events: NextPage = () => {
  const { t } = useTranslation("events");
  const router = useRouter();

  const { isLoading, events } = useEvents();

  const handleRedirect = (id: string) => {
    router.push("/events/" + id);
  };

  return (
    <AppBarWrapper>
      <PageLayout sx={{ rowGap: "25px" }}>
        <Typography variant="h2" color="primary" fontWeight="bold">
          {t("events.title")}
        </Typography>

        {!isLoading && events[0] && (
          <EventPreviewBand
            title={events[0].name}
            imageUrl={events[0].coverImageUrl}
            onClick={() => handleRedirect(events[0].id)}
            sx={{ width: "100%" }}
          />
        )}
        <CustomDivider />

        <Stack flexDirection="row" columnGap="20px" sx={{ width: "100%" }}>
          {!isLoading && events[1] && (
            <EventPreviewBand
              title={events[1].name}
              imageUrl={events[1].coverImageUrl}
              onClick={() => handleRedirect(events[1].id)}
            />
          )}
          {!isLoading && events[2] && (
            <EventPreviewBand
              title={events[2].name}
              imageUrl={events[2].coverImageUrl}
              onClick={() => handleRedirect(events[2].id)}
            />
          )}
        </Stack>
        <CustomDivider />

        <Stack
          flexDirection="row"
          flexWrap="wrap"
          gap="20px"
          sx={{ maxWidth: "1200px" }}
        >
          {events &&
            events
              .slice(3)
              .map((event: Event, i: number) => (
                <EventPreviewCard
                  event={event}
                  key={event.id}
                  orientation={i % 2 > 0 ? "right" : "left"}
                  onClick={() => handleRedirect(event.id)}
                />
              ))}
        </Stack>
      </PageLayout>
    </AppBarWrapper>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "events"])),
    },
  };
}

export default Events;
