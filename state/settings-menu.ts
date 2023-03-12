import { atom } from "jotai";
import { MenuSubCategory } from "@/types/settings-menu";

export const showSettingsAtom = atom<boolean>(false);
export const activeMenuAtom = atom<string | undefined>(undefined);
export const activeSubMenuAtom = atom<string | undefined>(undefined);
export const activeOptionAtom = atom<MenuSubCategory | undefined>(undefined);
