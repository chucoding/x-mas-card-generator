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
        destination: "https://clovastudio.stream.ntruss.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
