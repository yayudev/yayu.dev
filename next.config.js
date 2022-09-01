const DEV_ENV = process.env.NODE_ENV === "development";
const SERVER_URL = DEV_ENV ? "http://localhost:3000" : "https://yayu.dev.com";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["via.placeholder.com"],
  },
  async rewrites() {
    const devProxy = [
      {
        source: "/api/:path*",
        destination: "https://yayu.dev/api/:path*",
      },
    ];

    return DEV_ENV ? devProxy : [];
  },
};

module.exports = nextConfig;
