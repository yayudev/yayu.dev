// Settings context
import React from "react";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import Router from "next/router";
import { i18n } from "next-i18next";

import { DEFAULT_LOCALE } from "@/constants/locale";
import { atomWithStorageAndSideEffects } from "@/utils/jotai";
import { SettingsToggleOptions } from "@/types/settings-menu";

/****************
 * STATE ATOMS  *
 ****************/

export const showMenuOnMobileAtom = atom<boolean>(false);

/************************
 * CONFIGURATION ATOMS  *
 ************************/

export const animationsAtom = atomWithStorage<string>(
  "animations",
  SettingsToggleOptions.ON
);
export const commentsAtom = atomWithStorage<string>(
  "comments",
  SettingsToggleOptions.ON
);
export const socialShareAtom = atomWithStorage<string>(
  "social-sharing",
  SettingsToggleOptions.ON
);
export const trackingAtom = atomWithStorage<string>(
  "tracking",
  SettingsToggleOptions.ON
);

export const languageAtom = atomWithStorageAndSideEffects(
  "language",
  DEFAULT_LOCALE,
  async (previousValue, nextValue) => {
    if (!previousValue || !nextValue || previousValue === nextValue) {
      return;
    }

    await Router.push(Router.asPath, Router.asPath, { locale: nextValue });
    i18n?.changeLanguage(nextValue);
  }
);

// Make sure we always use route locale > localStorage > default locale
languageAtom.onMount = (setAtom) => {
  const currentLang =
    i18n?.language ?? localStorage.getItem("language") ?? DEFAULT_LOCALE;

  i18n?.changeLanguage(currentLang);
  setAtom(currentLang);
};
