/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination:
          "https://5l1o3xbgj7.apigw.ntruss.com/x-mas-generator/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
