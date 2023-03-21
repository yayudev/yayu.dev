import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { showMenuOnMobileAtom } from "@/state/application";
import { activeOptionAtom, showSettingsAtom } from "@/state/settings-menu";

import { useAnimationsEnabled } from "@/hooks/use-animations-enabled";

import { SettingsBGWrapper } from "@/components/settings/settings-bg-wrapper";
import { SettingsMenu } from "@/components/settings/settings-menu";
import { SettingsTitle } from "@/components/settings/settings-title";
import { SettingsTooltipBar } from "@/components/settings/settings-tooltip-bar";
import { CloseMenuIcon } from "@/components/shared/close-menu-icon";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  //noinspection ALL
  height: 100vh;
  //noinspection ALL
  height: 100svh;
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

const Spacing = styled.div`
  display: flex;
  flex: 1;
`;

export function Settings() {
  const { t } = useTranslation();

  const animationsEnabled = useAnimationsEnabled();
  const [_, setShowMenuOnMobile] = useAtom(showMenuOnMobileAtom);
  const [showSettings, setShowSettings] = useAtom(showSettingsAtom);
  const [activeOption] = useAtom(activeOptionAtom);

  /*************
   *  TOOLTIP  *
   *************/

  const tooltipText = activeOption
    ? t(`settings:descriptions.${activeOption}`)
    : "";

  /******************
   * EVENT HANDLERS *
   ******************/

  function closeSettings() {
    setShowSettings(false);
    setShowMenuOnMobile(false);
  }

  /******************
   *  MAIN RENDER   *
   ******************/
  return (
    <AnimatePresence>
      {showSettings && (
        <Container
          aria-label="Settings"
          initial={animationsEnabled ? { opacity: 0 } : {}}
          animate={animationsEnabled ? { opacity: 1 } : {}}
          exit={animationsEnabled ? { opacity: 0 } : {}}
          transition={{
            ease: "easeInOut",
            duration: 0.25,
          }}
        >
          <CloseMenuIcon showCloseIcon onClick={closeSettings} />
          <SettingsBGWrapper>
            <SettingsTitle
              initial={animationsEnabled ? { opacity: 0 } : {}}
              animate={animationsEnabled ? { opacity: 1 } : {}}
              transition={{
                ease: "circOut",
                duration: 0.5,
              }}
            >
              {t("settings:title")}
            </SettingsTitle>

            <Content>
              <SettingsMenu />

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
