import Head from "next/head";
import styled from "styled-components";
import { SettingsBGWrapper } from "../components/settings/settings-bg-wrapper";
import { SettingsTitle } from "../components/settings/settings-title";
import { SettingsTooltipBar } from "../components/settings/settings-tooltip-bar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
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
        <Content />
        <SettingsTooltipBar
          text="This is a tooltip."
          showArrows
          showBack
          showConfirm
        />
      </SettingsBGWrapper>
    </Container>
  );
}
