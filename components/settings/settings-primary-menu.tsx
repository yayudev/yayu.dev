import { useAtom } from "jotai";
import { useTranslation } from "next-i18next";

import { SettingsMenuLevel } from "@/components/settings/settings-menu-level";
import { SettingsMenuItem } from "@/components/settings/settings-menu-item";
import {
  activeMenuAtom,
  activeOptionAtom,
  activeSubMenuAtom,
} from "@/state/settings-menu";
import { MenuCategory } from "@/types/settings-menu";

export function SettingsPrimaryMenu() {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useAtom(activeMenuAtom);
  const [_activeMenu, setActiveSubMenu] = useAtom(activeSubMenuAtom);
  const [_activeOption, setActiveOption] = useAtom(activeOptionAtom);

  function handleSelection(category: MenuCategory) {
    setActiveMenu(category);
    setActiveSubMenu(undefined);
    setActiveOption(undefined);
  }

  return (
    <SettingsMenuLevel>
      <SettingsMenuItem
        label={t("settings:labels.content")}
        isSelected={activeMenu === MenuCategory.CONTENT}
        onClick={() => handleSelection(MenuCategory.CONTENT)}
      />
      <SettingsMenuItem
        label={t("settings:labels.blog")}
        isSelected={activeMenu === MenuCategory.BLOG}
        onClick={() => handleSelection(MenuCategory.BLOG)}
      />
      <SettingsMenuItem
        label={t("settings:labels.other")}
        isSelected={activeMenu === MenuCategory.OTHER}
        onClick={() => handleSelection(MenuCategory.OTHER)}
      />
    </SettingsMenuLevel>
  );
}
