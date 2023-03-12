// Settings context
import React from "react";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import Router from "next/router";
import { i18n } from "next-i18next";

import { DEFAULT_LOCALE } from "@/config/locale";
import { atomWithStorageAndSideEffects } from "@/utils/jotai";

/****************
 * STATE ATOMS  *
 ****************/

export const showMenuOnMobileAtom = atom(false);

/************************
 * CONFIGURATION ATOMS  *
 ************************/

export const animationsAtom = atomWithStorage("animations", "on");
export const commentsAtom = atomWithStorage("comments", "on");
export const socialShareAtom = atomWithStorage("social-sharing", "on");
export const trackingAtom = atomWithStorage("tracking", "on");

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
