require("dotenv/config");

const prismPlugin = require("@mapbox/rehype-prism");
const bundleAnalyzer = require("@next/bundle-analyzer");
const nextMDX = require("@next/mdx");
const i18nConfig = require("./next-i18next.config");

const DEV_ENV = process.env.NODE_ENV === "development";

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID ?? "";
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN ?? "";
const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ?? "";
const VERCEL_URL = process.env.VERCEL_URL ?? "";
const ANALYZE_BUNDLE = process.env.ANALYZE_BUNDLE ?? "";

let SERVER_URL = process.env.SERVER_URL || "https://yayu.dev";
let API_ALLOWED_ORIGINS = process.env.API_ALLOWED_ORIGINS || "yayu.dev";

if (VERCEL_URL) {
  SERVER_URL = `https://${VERCEL_URL}`;
  API_ALLOWED_ORIGINS = `${API_ALLOWED_ORIGINS},${VERCEL_URL}`;
} else if (DEV_ENV) {
  SERVER_URL = "http://localhost:3000";
  API_ALLOWED_ORIGINS = `${API_ALLOWED_ORIGINS},localhost`;
}

const API_URL = process.env.API_URL || SERVER_URL;

// noinspection JSUnusedGlobalSymbols
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18nConfig.i18n,

  // Compile options
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  compiler: {
    styledComponents: true,
  },

  // Images whitelist
  images: {
    // Needed to cast because apparently for typescript
    // ["image/avif", "image/webp"] isn't of type ImageFormat[],
    // which has the type "image/avif" | "image/webp" .
    formats: ["image/avif", "image/webp"],
    domains: ["images.ctfassets.net"],
  },

  // env vars
  env: {
    API_URL,
    SERVER_URL,
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    CONTENTFUL_ACCESS_TOKEN,
    API_ALLOWED_ORIGINS,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [prismPlugin({})],
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: ANALYZE_BUNDLE === "true",
  openAnalyzer: false,
});

const configWithPlugins = withMDX(withBundleAnalyzer(nextConfig));

module.exports = configWithPlugins;
