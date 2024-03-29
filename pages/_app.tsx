import { Analytics } from "@vercel/analytics/react";
import { useAtom } from "jotai";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import Head from "next/head";
import styled from "styled-components";

import { SettingsToggleOptions } from "@/types/settings-menu";

import { trackingAtom } from "@/state/application";

import { useAnimationsEnabled } from "@/hooks/use-animations-enabled";

import { HomeMenu } from "@/components/home-menu/home-menu";
import { Settings } from "@/components/settings/settings";

import nextI18NextConfig from "../next-i18next.config";

import "@/styles/globals.css";

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
  const animationsEnabled = useAnimationsEnabled();

  return (
    <AppContentWrapper className={animationsEnabled ? "" : "no-animations"}>
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
