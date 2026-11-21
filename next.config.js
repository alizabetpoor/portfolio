/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["127.0.0.1"],
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.alizabetpour.ir" }],
        destination: "https://alizabetpour.ir/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
