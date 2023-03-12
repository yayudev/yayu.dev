// Settings context
import React from "react";
import { atom } from "jotai";
import { i18n } from "next-i18next";
import Router from "next/router";

import { atomWithStorageAndSideEffects } from "@/utils/jotai";
import { DEFAULT_LOCALE } from "@/config/locale";

export const animationsAtom = atom("on");
export const commentsAtom = atom("on");
export const socialShareAtom = atom("on");
export const trackingAtom = atom("on");

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
