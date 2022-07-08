const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "project0-images.s3.eu-west-3.amazonaws.com",
        },
      ],
    },
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/homepage",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
