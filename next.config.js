/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "src/styles/theme.scss";`,
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
