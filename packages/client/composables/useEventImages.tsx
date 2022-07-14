import { useQuery } from "react-query";

async function fetchEventImages({
  queryKey,
}: {
  queryKey: string[];
}): Promise<any> {
  const [_, id] = queryKey;
  return [
    {
      imageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/posts/1639738719292_24676994_posts",
    },
    {
      imageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/posts/1639738719292_24676994_posts",
    },
    {
      imageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/posts/1639738719292_24676994_posts",
    },
    {
      imageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/posts/1639738719292_24676994_posts",
    },
    {
      imageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/posts/1639738719292_24676994_posts",
    },
    {
      imageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/posts/1639738719292_24676994_posts",
    },
    {
      imageUrl:
        "https://project0-images.s3.eu-west-3.amazonaws.com/posts/1639738719292_24676994_posts",
    },
  ];
}

export function useEventImages(id: string) {
  const { isLoading, data: images } = useQuery(
    ["eventImages", id],
    fetchEventImages
  );

  return {
    isLoading,
    images,
  };
}
