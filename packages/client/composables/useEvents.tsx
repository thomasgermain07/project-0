import { useQuery } from "react-query";
import { Event } from "../types/event";

// TODEL
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchEvents(): Promise<Event[]> {
  const description =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
  return [
    {
      id: "123",
      name: "Rally du Picodon mais en plus long",
      location: "Orange mais en beaucoup trop long",
      date: "12-12-2022",
      description,
      coverImageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/events/1638987409561_image",
    },
    {
      id: "124",
      name: "Rally du Gard",
      location: "Gard",
      date: "23-12-2022",
      description,
      coverImageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/events/1640106626267_image",
    },
    {
      id: "125",
      name: "Rally du Gard",
      location: "Gard",
      date: "23-12-2022",
      description,
      coverImageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/events/1639492173895_image",
    },
    {
      id: "126",
      name: "Rally du Gard ici",
      location: "Gard",
      date: "23-12-2022",
      description,
      coverImageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/events/1640106626267_image",
    },
    {
      id: "127",
      name: "Rally du Gard",
      location: "Gard",
      date: "23-12-2022",
      description,
      coverImageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/events/1640106626267_image",
    },
    {
      id: "128",
      name: "Rally du Gard",
      location: "Gard",
      date: "23-12-2022",
      description,
      coverImageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/events/1640106626267_image",
    },
  ];
}

async function fetchNextEvent(): Promise<Event> {
  return {
    id: "129",
    name: "Rally de Paris",
    location: "Paris",
    date: "07-08-2022",
    coverImageUrl:
      "https://project0-images.s3.eu-west-3.amazonaws.com/events/1640106626267_image",
  };
}

export function useEvents(id?: string) {
  const { isLoading: eventsIsLoading, data: eventsData } = useQuery(
    "events",
    fetchEvents,
    {
      select: (events) => {
        if (typeof id === "undefined") {
          return events;
        } else {
          return events.find((event) => event.id === id);
        }
      },
    }
  );

  const { isLoading: nextEventIsLoading, data: nextEventData } = useQuery(
    "nextEvent",
    fetchNextEvent
  );

  return {
    events: eventsData as Event[],
    event: eventsData as Event,
    nextEvent: nextEventData,
    isLoading: eventsIsLoading || nextEventIsLoading,
  };
}
