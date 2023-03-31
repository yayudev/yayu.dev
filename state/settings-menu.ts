import { atom } from "jotai";

import { MenuCategory, MenuSubCategory } from "@/types/settings-menu";

export const showSettingsAtom = atom<boolean>(false);
export const activeMenuAtom = atom<MenuCategory | undefined>(undefined);
export const activeSubMenuAtom = atom<MenuSubCategory | undefined>(undefined);
export const activeOptionAtom = atom<MenuSubCategory | undefined>(undefined);
