import { useContext, useState } from "react";
import styled from "styled-components";
import { get, set } from "lodash";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";

import { SettingsMenuItemType } from "@/types/settings-menu";
import { SETTINGS_MENUS_LIST } from "@/config/settings-menu";

import {
  SettingsContext,
  SettingsContextType,
  SettingsState,
} from "@/contexts/settings";
import { SettingsBGWrapper } from "@/components/settings/settings-bg-wrapper";
import { SettingsMenuItem } from "@/components/settings/settings-menu-item";
import { SettingsMenuLevel } from "@/components/settings/settings-menu-level";
import { SettingsOptionSelect } from "@/components/settings/settings-option-select";
import { SettingsTitle } from "@/components/settings/settings-title";
import { SettingsTooltipBar } from "@/components/settings/settings-tooltip-bar";

import {
  ApplicationStateContext,
  ApplicationStateContextType,
} from "@/contexts/application-state";
import { useKeyboard } from "@/hooks/use-keyboard";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 99;
  margin: 0;
  box-sizing: border-box;
  padding: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
`;

const MenuWrapper = styled(motion.div)`
  display: flex;
  transform-origin: left;
  will-change: opacity, transfom;
`;

const Spacing = styled.div`
  display: flex;
  flex: 1;
`;

export function Settings() {
  const { t } = useTranslation("settings");

  const [menu, setMenu] = useState<number | undefined>();
  const [subMenu, setSubMenu] = useState<number | undefined>();
  const { settings, setSettings } =
    useContext<SettingsContextType>(SettingsContext);
  const { applicationState, setApplicationState } =
    useContext<ApplicationStateContextType>(ApplicationStateContext);
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
          key={item.labelKey}
          labelKey={item.labelKey}
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
          labelKey={item.labelKey}
          options={item.options}
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

  const tooltipText = openOption?.tooltipKey ?? "";

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
    const newSettings = { ...settings } as SettingsState;
    set(newSettings, key, value);

    setSettings(newSettings);
  }

  function closeSettings() {
    setApplicationState({ ...applicationState, showSettings: false });
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

      if (!applicationState) return;

      closeSettings();
    },
    [openOption, menu, subMenu]
  );

  /******************
   *  MAIN RENDER   *
   ******************/
  return (
    <AnimatePresence>
      {applicationState?.showSettings && (
        <Container
          aria-label="Settings"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.25,
          }}
        >
          <SettingsBGWrapper>
            <SettingsTitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "circOut",
                duration: 0.5,
              }}
            >
              {t("title")}
            </SettingsTitle>

            <Content>
              <MenuWrapper
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  ease: "circOut",
                  duration: 0.25,
                }}
              >
                {menuComponent}
                {subMenuComponent}
                {optionSelectorComponent}
              </MenuWrapper>

              <Spacing />
            </Content>

            <SettingsTooltipBar
              textKey={tooltipText}
              showArrows
              showBack
              showConfirm
              onBack={closeSettings}
            />
          </SettingsBGWrapper>
        </Container>
      )}
    </AnimatePresence>
  );
}
