// @ts-check
require("dotenv");

const { i18n } = require("./next-i18next.config");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const DEV_ENV = process.env.NODE_ENV === "development";
const DEV_PREVIEW_URL = process.env.DEV_PREVIEW_URL;
const PORT = process.env.PORT || 3000;
const ENABLE_DEV_PROXY = process.env.ENABLE_NETWORK === "on";

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

let SERVER_URL = process.env.SERVER_URL || "https://yayu.dev";

if (DEV_PREVIEW_URL) {
  SERVER_URL = DEV_PREVIEW_URL;
}

if (DEV_ENV) {
  SERVER_URL = "http://localhost:3000";
}

if (ENABLE_DEV_PROXY) {
  const ip = require("ip");
  const address = ip.address();
  // noinspection HttpUrlsUsage
  SERVER_URL = `http://${address}:${PORT}`;
  console.log(`Running on ${SERVER_URL}`);
}

// noinspection JSUnusedGlobalSymbols
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compile options
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  // i18n
  i18n,

  // Images whitelist
  images: {
    domains: ["via.placeholder.com", "images.ctfassets.net"],
  },

  // env vars
  env: {
    SERVER_URL,
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN,
  },
};

module.exports = withMDX(nextConfig);
