import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
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

const HomeMenuWrapper = styled.div<{ fullwidth: boolean }>`
  transition: width 250ms ease-in-out;
  width: ${(props) => (props.fullwidth ? "100%" : "300px")};
  min-width: 300px;
  box-shadow: 0 0 20px 2px var(--box-shadow-color);
  z-index: 2;
`;

function AppContent({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.route === "/";

  return (
    <AppContentWrapper>
      <HomeMenuWrapper fullwidth={isHome}>
        <HomeMenu />
      </HomeMenuWrapper>
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
