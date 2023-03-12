import styled from "styled-components";
import { motion } from "framer-motion";
import { useAtom } from "jotai";

import { useKeyboard } from "@/hooks/use-keyboard";

import {
  activeMenuAtom,
  activeOptionAtom,
  showSettingsAtom,
  activeSubMenuAtom,
} from "@/state/settings-menu";

import { SettingsSubMenu } from "@/components/settings/settings-submenu";
import { SettingsPrimaryMenu } from "@/components/settings/settings-primary-menu";

const MenuWrapper = styled(motion.div)`
  display: flex;
  transform-origin: left;
  will-change: opacity, transfom;
`;

export function SettingsMenu() {
  const [_, setShowSettings] = useAtom(showSettingsAtom);
  const [activeMenu, setActiveMenu] = useAtom(activeMenuAtom);
  const [activeSubMenu, setActiveSubMenu] = useAtom(activeSubMenuAtom);
  const [activeOption, setActiveOption] = useAtom(activeOptionAtom);

  /***********************
   * KEYBOARD NAVIGATION *
   ***********************/

  useKeyboard(
    ["Escape"],
    () => {
      if (activeOption) {
        setActiveOption(undefined);
        setActiveSubMenu(undefined);
        return;
      }

      if (activeMenu !== undefined) {
        setActiveMenu(undefined);
        return;
      }

      setShowSettings(false);
    },
    [activeOption, activeMenu, activeSubMenu]
  );

  return (
    <MenuWrapper
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{
        ease: "circOut",
        duration: 0.25,
      }}
    >
      <SettingsPrimaryMenu />

      {activeMenu && <SettingsSubMenu />}
    </MenuWrapper>
  );
}
