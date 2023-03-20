/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // basePath: "/third-party-login",
  // assetPrefix: "/third-party-login",
  images: {
    domains: ["localhost", "www.taiwanviptravel.com", "do1fendi.github.io"],
    unoptimized: true,
  },
  env: {
    // BASEURL: "https://do1fendi.github.io/third-party-login",
    BASEURL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
