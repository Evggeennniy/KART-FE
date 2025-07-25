import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    domains: ["localhost", "kart-podo.eu"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kart-podo.eu",
        pathname: "/media/products/**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
