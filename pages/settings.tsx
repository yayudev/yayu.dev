import Head from "next/head";
import styled from "styled-components";
import { SettingsBGWrapper } from "../components/settings/settings-bg-wrapper";
import { SettingsTitle } from "../components/settings/settings-title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default function Settings() {
  return (
    <Container>
      <Head>
        <title>Settings</title>
        <meta
          name="description"
          content="Hey, you can change the site settings here :O"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SettingsBGWrapper>
        <SettingsTitle>SETTINGS</SettingsTitle>
      </SettingsBGWrapper>
    </Container>
  );
}
