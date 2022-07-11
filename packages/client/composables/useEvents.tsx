export function useEvents() {
  const listEvent = [
    {
      id: "123",
      name: "Rally du Picodon",
      location: "Orange",
      date: "12-12-2022",
      coverImageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/events/1638987409561_image",
    },
    {
      id: "124",
      name: "Rally du Gard",
      location: "Gard",
      date: "23-12-2022",
      coverImageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/events/1640106626267_image",
    },
    {
      id: "125",
      name: "Rally du Gard",
      location: "Gard",
      date: "23-12-2022",
      coverImageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/events/1639492173895_image",
    },
    {
      id: "126",
      name: "Rally du Gard",
      location: "Gard",
      date: "23-12-2022",
      coverImageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/events/1640106626267_image",
    },
  ];

  return {
    events: listEvent,
  };
}
