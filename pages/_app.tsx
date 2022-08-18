import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { SettingsProvider } from "@/contexts/settings";
import { Settings } from "@/components/settings/settings";
import { ApplicationStateProvider } from "@/contexts/application-state";
import { HomeMenu } from "@/components/home/home-menu";
import { useRouter } from "next/router";
import styled from "styled-components";

const AppContentWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  display: flex;
`;

const HomeMenuWrapper = styled.div<{ fullwidth: boolean }>`
  transition: width 250ms ease-in-out;
  width: ${(props) => (props.fullwidth ? "100%" : "300px")};
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

export default function MyApp(props: AppProps) {
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
