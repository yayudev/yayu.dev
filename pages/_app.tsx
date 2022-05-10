import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { SettingsProvider } from "@/contexts/settings";

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

export default MyApp;
