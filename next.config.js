require("dotenv");

const DEV_ENV = process.env.NODE_ENV === "development";
const PORT = process.env.PORT || 3000;
const ENABLE_DEV_PROXY = process.env.ENABLE_NETWORK === "on";

let SERVER_URL = process.env.SERVER_URL || "https://yayu.dev";

if (DEV_ENV) {
  SERVER_URL = "http://localhost:3000";
}

if (ENABLE_DEV_PROXY) {
  const ip = require("ip");
  address = ip.address();
  SERVER_URL = `http://${address}:${PORT}`;
  console.log(`Running on ${SERVER_URL}`);
}

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
