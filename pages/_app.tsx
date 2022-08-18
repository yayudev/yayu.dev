import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { SettingsProvider } from "@/contexts/settings";
import { Settings } from "@/components/settings/settings";
import { ApplicationStateProvider } from "@/contexts/application-state";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ApplicationStateProvider>
        <SettingsProvider>
          <Component {...pageProps} />
          <Settings />
        </SettingsProvider>
      </ApplicationStateProvider>
    </>
  );
}
