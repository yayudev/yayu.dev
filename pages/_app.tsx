import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import styled from "styled-components";

import { ApplicationStateProvider } from "@/contexts/application-state";
import { SettingsProvider } from "@/contexts/settings";
import { HomeMenu } from "@/components/home-menu/home-menu";
import { Settings } from "@/components/settings/settings";
import nextI18NextConfig from "../next-i18next.config";

import "@/styles/globals.css";

const AppContentWrapper = styled.div`
  height: 100vh;
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
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ApplicationStateProvider>
        <SettingsProvider>
          <AppContent {...props} />
        </SettingsProvider>
      </ApplicationStateProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
