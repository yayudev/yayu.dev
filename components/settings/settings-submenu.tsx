import { useTranslation } from "next-i18next";
import { useAtom } from "jotai";

import {
  MenuCategory,
  MenuSubCategory,
  SettingsLanguageOptions,
  SettingsToggleOptions,
} from "@/types/settings-menu";
import {
  animationsAtom,
  commentsAtom,
  languageAtom,
  socialShareAtom,
  trackingAtom,
} from "@/state/application";
import { activeMenuAtom, activeOptionAtom } from "@/state/settings-menu";

import { SettingsMenuLevel } from "@/components/settings/settings-menu-level";
import { SettingsMenuItem } from "@/components/settings/settings-menu-item";

export function SettingsSubMenu() {
  const { t } = useTranslation();

  const [activeMenu] = useAtom(activeMenuAtom);
  const [selectedLanguage, setSelectedLanguage] = useAtom(languageAtom);
  const [animationsEnabled, setAnimationsEnabled] = useAtom(animationsAtom);
  const [commentsEnabled, setCommentsEnabled] = useAtom(commentsAtom);
  const [socialShareEnabled, setSocialShareEnabled] = useAtom(socialShareAtom);
  const [trackingEnabled, setTrackingEnabled] = useAtom(trackingAtom);

  const [activeOption, setActiveOption] = useAtom(activeOptionAtom);

  return (
    <>
      <SettingsMenuLevel isChildMenu>
        {activeMenu === MenuCategory.CONTENT && (
          <>
            <SettingsMenuItem
              label={t("settings:labels.language")}
              options={[
                {
                  text: t("settings:options.english"),
                  value: SettingsLanguageOptions.ENGLISH,
                },
                {
                  text: t("settings:options.spanish"),
                  value: SettingsLanguageOptions.SPANISH,
                },
              ]}
              value={selectedLanguage}
              choiceId={MenuSubCategory.LANGUAGE}
              isSelected={activeOption === MenuSubCategory.LANGUAGE}
              isChildOption
              onClick={() => setActiveOption(MenuSubCategory.LANGUAGE)}
              onChange={(value) => setSelectedLanguage(value)}
            />
            <SettingsMenuItem
              label={t("settings:labels.animations")}
              options={[
                {
                  text: t("settings:options.on"),
                  value: SettingsToggleOptions.ON,
                },
                {
                  text: t("settings:options.off"),
                  value: SettingsToggleOptions.OFF,
                },
              ]}
              value={animationsEnabled}
              choiceId={MenuSubCategory.ANIMATIONS}
              isSelected={activeOption === MenuSubCategory.ANIMATIONS}
              isChildOption
              onClick={() => setActiveOption(MenuSubCategory.ANIMATIONS)}
              onChange={(value) => setAnimationsEnabled(value)}
            />
          </>
        )}

        {activeMenu === MenuCategory.BLOG && (
          <>
            <SettingsMenuItem
              label={t("settings:labels.comments")}
              options={[
                {
                  text: t("settings:options.on"),
                  value: SettingsToggleOptions.ON,
                },
                {
                  text: t("settings:options.off"),
                  value: SettingsToggleOptions.OFF,
                },
              ]}
              value={commentsEnabled}
              choiceId={MenuSubCategory.COMMENTS}
              isSelected={activeOption === MenuSubCategory.COMMENTS}
              isChildOption
              onClick={() => setActiveOption(MenuSubCategory.COMMENTS)}
              onChange={(value) => setCommentsEnabled(value)}
            />
            <SettingsMenuItem
              label={t("settings:labels.social-share")}
              options={[
                {
                  text: t("settings:options.on"),
                  value: SettingsToggleOptions.ON,
                },
                {
                  text: t("settings:options.off"),
                  value: SettingsToggleOptions.OFF,
                },
              ]}
              value={socialShareEnabled}
              choiceId={MenuSubCategory.SOCIAL_SHARE}
              isSelected={activeOption === MenuSubCategory.SOCIAL_SHARE}
              isChildOption
              onClick={() => setActiveOption(MenuSubCategory.SOCIAL_SHARE)}
              onChange={(value) => setSocialShareEnabled(value)}
            />
          </>
        )}

        {activeMenu === MenuCategory.OTHER && (
          <>
            <SettingsMenuItem
              label={t("settings:labels.tracking")}
              options={[
                {
                  text: t("settings:options.on"),
                  value: SettingsToggleOptions.ON,
                },
                {
                  text: t("settings:options.off"),
                  value: SettingsToggleOptions.OFF,
                },
              ]}
              value={trackingEnabled}
              choiceId={MenuSubCategory.TRACKING}
              isSelected={activeOption === MenuSubCategory.TRACKING}
              isChildOption
              onClick={() => setActiveOption(MenuSubCategory.TRACKING)}
              onChange={(value) => setTrackingEnabled(value)}
            />
          </>
        )}
      </SettingsMenuLevel>
    </>
  );
}
