import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { get, set } from "lodash";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SettingsMenuItemType } from "@/types/settings-menu";
import { SETTINGS_MENUS_LIST } from "@/config/settings-menu";

import { SettingsBGWrapper } from "@/components/settings/settings-bg-wrapper";
import { SettingsTitle } from "@/components/settings/settings-title";
import { SettingsTooltipBar } from "@/components/settings/settings-tooltip-bar";
import { SettingsMenuLevel } from "@/components/settings/settings-menu-level";
import { SettingsMenuItem } from "@/components/settings/settings-menu-item";
import { SettingsOptionSelect } from "@/components/settings/settings-option-select";
import {
  SettingsContext,
  SettingsContextType,
  SettingsState,
} from "@/contexts/settings";
import { useKeyboard } from "@/hooks/use-keyboard";
import { useTranslation } from "next-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
`;

const MenuWrapper = styled.div`
  display: flex;
`;

const Spacing = styled.div`
  display: flex;
  flex: 1;
`;

const head = (
  <Head>
    <title>Settings</title>
    <meta
      name="description"
      content="Hey, you can change the site settings here :O"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);


export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['settings'])),
    },
  };
}

export default function Settings() {
  const router = useRouter();
  const  { t, i18n } = useTranslation('settings');

  const [menu, setMenu] = useState<number | undefined>();
  const [subMenu, setSubMenu] = useState<number | undefined>();
  const { settings, setSettings } =
    useContext<SettingsContextType>(SettingsContext);
  const [openOption, setOpenOption] = useState<
    SettingsMenuItemType | undefined
  >();

  /***************
   *  MAIN MENU  *
   ***************/

  const menuComponent = (
    <SettingsMenuLevel>
      {SETTINGS_MENUS_LIST.map((item, index) => (
        <SettingsMenuItem
          key={t(item.labelKey)}
          label={t(item.labelKey)}
          isSelected={menu === index}
          onClick={() => handleTopMenuClick(index)}
        />
      ))}
    </SettingsMenuLevel>
  );

  /**************
   *  SUB MENU  *
   **************/

  const subMenuItem =
    menu !== undefined ? SETTINGS_MENUS_LIST[menu] : undefined;
  const subMenuComponent = subMenuItem?.children && (
    <SettingsMenuLevel isChildMenu>
      {subMenuItem?.children.map((item, index) => (
        <SettingsMenuItem
          key={index}
          label={t(item.labelKey)}
          value={get(settings, item.optionKey)}
          isSelected={subMenu === index}
          isChildOption
          onClick={() => handleSubMenuClick(index, item)}
        />
      ))}
    </SettingsMenuLevel>
  );

  /*******************
   * OPTION SELECTOR *
   *******************/

  const optionSelectorComponent = openOption && (
    <SettingsOptionSelect
      options={openOption.options}
      selectedValue={get(settings, openOption.optionKey)}
      onSelect={(value) => handleChangeOption(openOption.optionKey, value)}
    />
  );

  /*************
   *  TOOLTIP  *
   *************/

  const tooltipKey = openOption?.tooltipKey ?? "";

  /******************
   * EVENT HANDLERS *
   ******************/

  function handleTopMenuClick(index: number) {
    setMenu(index);
    setSubMenu(undefined);
    setOpenOption(undefined);
  }

  function handleSubMenuClick(index: number, option: SettingsMenuItemType) {
    setSubMenu(index);
    setOpenOption(option);
  }

  function handleChangeOption(
    key: SettingsMenuItemType["optionKey"],
    value: string | boolean
  ) {
    setOpenOption(undefined);
    setSubMenu(undefined);

    console.log(key)

    if (key === "global.language") {
      const [_, language] = (value as string).split('.');
      console.log('changeLang')
      i18n.changeLanguage('en-US');
    }

    const newSettings = { ...settings } as SettingsState;
    set(newSettings, key, value);

    setSettings(newSettings);
  }

  useKeyboard(
    ["Escape"],
    () => {
      if (openOption) {
        setOpenOption(undefined);
        setSubMenu(undefined);
        return;
      }

      if (menu !== undefined) {
        setMenu(undefined);
        return;
      }

      router.back();
    },
    [openOption, menu, subMenu]
  );

  /******************
   *  MAIN RENDER   *
   ******************/

  return (
    <Container aria-label="Settings">
      {head}

      <SettingsBGWrapper>
        <SettingsTitle>{t('title')}</SettingsTitle>

        <Content>
          <MenuWrapper>
            {menuComponent}
            {subMenuComponent}
            {optionSelectorComponent}
          </MenuWrapper>

          <Spacing />
        </Content>

        <SettingsTooltipBar
          text={t(tooltipKey)}
          showArrows
          showBack
          showConfirm
        />
      </SettingsBGWrapper>
    </Container>
  );
}
