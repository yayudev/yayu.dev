import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import styled from "styled-components";

import nextI18NextConfig from "../next-i18next.config";
import { trackingAtom } from "@/state/application";

import { HomeMenu } from "@/components/home-menu/home-menu";
import { Settings } from "@/components/settings/settings";

import "@/styles/globals.css";
import { useAtom } from "jotai";
import { SettingsToggleOptions } from "@/types/settings-menu";

const AppContentWrapper = styled.div`
  //noinspection ALL
  height: 100vh;
  //noinspection ALL
  height: 100svh;
  overflow: hidden;
  width: 100vw;
  display: flex;
`;

function AppContent({ Component, pageProps }: AppProps) {
  return (
    <AppContentWrapper>
      <HomeMenu />

      <Component {...pageProps} />
      <Settings />
    </AppContentWrapper>
  );
}

function MyApp(props: AppProps) {
  const [tracking] = useAtom(trackingAtom);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <AppContent {...props} />

      <Analytics
        beforeSend={(event) => {
          // Do no send events if tracking is disabled
          return tracking === SettingsToggleOptions.ON ? event : null;
        }}
      />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
