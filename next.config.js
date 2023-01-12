require("dotenv");

const { i18n } = require("./next-i18next.config");

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
  // Compile options
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  // i18n
  i18n,

  // Images whitelist
  images: {
    domains: ["via.placeholder.com"],
  },

  // env vars
  env: {
    SERVER_URL,
  },

  // Dev API proxy
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
