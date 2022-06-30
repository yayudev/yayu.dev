import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from 'next-i18next';
import { SettingsProvider } from "@/contexts/settings";
import nextI18NextConfig from '../next-i18next.config.js';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SettingsProvider>
        <Component {...pageProps} />
      </SettingsProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
