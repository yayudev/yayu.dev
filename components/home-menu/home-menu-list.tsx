import styled from "styled-components";
import { useAtom } from "jotai";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation("common");
  const [_, setShowSettings] = useAtom(showSettingsAtom);

  function openSettings() {
    setShowSettings(true);
  }

  return (
    <nav>
      <MenuList>
        <HomeMenuItem key="blog" href="/blog">
          {t("blog")}
        </HomeMenuItem>
        <HomeMenuItem key="playground" href="/playground">
          {t("playground")}
        </HomeMenuItem>
        <HomeMenuItem key="settings" onClick={openSettings}>
          {t("settings")}
        </HomeMenuItem>
        <HomeMenuItem key="about" href="/about">
          {t("about")}
        </HomeMenuItem>
      </MenuList>
    </nav>
  );
}
