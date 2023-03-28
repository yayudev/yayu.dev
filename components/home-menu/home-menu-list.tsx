import { useAtom } from "jotai";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { showSettingsAtom } from "@/state/settings-menu";

import { HomeMenuItem } from "@/components/home-menu/home-menu-item";

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export function HomeMenuList() {
  const { t } = useTranslation();
  const [_, setShowSettings] = useAtom(showSettingsAtom);

  function openSettings() {
    setShowSettings(true);
  }

  return (
    <nav>
      <MenuList data-testid="home-menu-list">
        <HomeMenuItem key="blog" href="/blog">
          {t("common:blog")}
        </HomeMenuItem>
        <HomeMenuItem key="playground" href="/playground">
          {t("common:playground")}
        </HomeMenuItem>
        <HomeMenuItem key="settings" onClick={openSettings}>
          {t("common:settings")}
        </HomeMenuItem>
        <HomeMenuItem key="about" href="/about">
          {t("common:about")}
        </HomeMenuItem>
      </MenuList>
    </nav>
  );
}
