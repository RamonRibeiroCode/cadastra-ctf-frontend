/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.hackingclub.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "app.safecodeweek.com.br",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "robohash.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
