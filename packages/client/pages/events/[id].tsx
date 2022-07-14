import Box from "@mui/material/Box";
import { GetStaticPropsContext, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { AppBarWrapper } from "../../components/AppBarWrapper";
import { useEvents } from "../../composables/useEvents";
import { PageLayout } from "../../styles/components/PageLayout";
import { EventDescription } from "../../components/EventDescription";
import { EventContent } from "../../components/EventContent";

const Event: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { event } = useEvents(id as string);

  return (
    <AppBarWrapper>
      <PageLayout>
        {event && (
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              width: "95vw",
              maxWidth: "1800px",
              height: "85vh",
              margin: "0 20px",
            }}
          >
            <EventDescription event={event} />
            <EventContent eventId={event.id} />
          </Box>
        )}
      </PageLayout>
    </AppBarWrapper>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: ["/events/*"],
    fallback: true /* TODO Check what to use instead of true */,
  };
}

export default Event;
