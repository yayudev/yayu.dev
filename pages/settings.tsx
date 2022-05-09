import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import { SettingsMenuItemType } from "@/types/settings-menu";
import { SETTINGS_MENUS_LIST } from "@/config/settings-menu";

import { SettingsBGWrapper } from "@/components/settings/settings-bg-wrapper";
import { SettingsTitle } from "@/components/settings/settings-title";
import { SettingsTooltipBar } from "@/components/settings/settings-tooltip-bar";
import { SettingsMenuLevel } from "@/components/settings/settings-menu-level";
import { SettingsMenuItem } from "@/components/settings/settings-menu-item";
import { SettingsOptionSelect } from "@/components/settings/settings-option-select";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
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

export default function Settings() {
  const [menu, setMenu] = useState<number | undefined>();
  const [subMenu, setSubMenu] = useState<number | undefined>();
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
          key={item.label}
          label={item.label}
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
          label={item.label}
          value={item.value}
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
      selectedValue={openOption.value}
      onSelect={(value) => handleChangeOption(openOption.optionKey, value)}
    />
  );

  /*************
   *  TOOLTIP  *
   *************/

  const tooltipText = openOption?.tooltip ?? "";

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
    value: SettingsMenuItemType["value"]
  ) {
    console.log(key, value);
    setOpenOption(undefined);
    setSubMenu(undefined);
  }

  /******************
   *  MAIN RENDER   *
   ******************/

  return (
    <Container>
      {head}

      <SettingsBGWrapper>
        <SettingsTitle>SETTINGS</SettingsTitle>

        <Content>
          <MenuWrapper>
            {menuComponent}
            {subMenuComponent}
            {optionSelectorComponent}
          </MenuWrapper>

          <Spacing />
        </Content>

        <SettingsTooltipBar
          text={tooltipText}
          showArrows
          showBack
          showConfirm
        />
      </SettingsBGWrapper>
    </Container>
  );
}
