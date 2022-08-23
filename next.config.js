/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    const devProxy = [
      {
        source: "/api/:path*",
        destination: "https://yayu.dev/api/:path*",
      },
    ];

    return process.env.NODE_ENV === "development" ? devProxy : [];
  },
};

module.exports = nextConfig;
