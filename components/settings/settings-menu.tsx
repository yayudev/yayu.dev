import { motion } from "framer-motion";
import { useAtom } from "jotai";
import styled from "styled-components";

import { MEDIA_QUERY_TABLET } from "@/constants/media-queries";

import {
  activeMenuAtom,
  activeOptionAtom,
  activeSubMenuAtom,
  showSettingsAtom,
} from "@/state/settings-menu";

import { useAnimationsEnabled } from "@/hooks/use-animations-enabled";
import { useKeyboard } from "@/hooks/use-keyboard";
import { useMobileLayout } from "@/hooks/user-mobile-layout";

import { SettingsPrimaryMenu } from "@/components/settings/settings-primary-menu";
import { SettingsSubMenu } from "@/components/settings/settings-submenu";

const MenuWrapper = styled(motion.div)`
  display: flex;
  transform-origin: left;
  will-change: opacity, transfom;

  ${MEDIA_QUERY_TABLET} {
    width: 100%;
  }
`;

export function SettingsMenu() {
  const mobileLayout = useMobileLayout();
  const animationsEnabled = useAnimationsEnabled();
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
      initial={animationsEnabled ? { opacity: 0, scaleX: 0 } : {}}
      animate={animationsEnabled ? { opacity: 1, scaleX: 1 } : {}}
      transition={{
        ease: "circOut",
        duration: 0.25,
      }}
    >
      <SettingsPrimaryMenu />

      {activeMenu && !mobileLayout && <SettingsSubMenu />}
    </MenuWrapper>
  );
}
