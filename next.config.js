/** @type {import('next').NextConfig} */

const withCSS = require("@zeit/next-css");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
  images: {
    loader: "imgix",
    path: "",
  },
};

module.exports = nextConfig;
