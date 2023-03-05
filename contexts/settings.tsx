// Settings context
import React, { createContext, ReactNode } from "react";
import { useTranslation } from "next-i18next";
import usePersistedState from "use-persisted-state-hook";
import { useRouter } from "next/router";

export type SettingsState = {
  content: {
    language: string;
    animations: boolean;
  };
  blog: {
    comments: boolean;
    "social-share": boolean;
  };
  other: {
    tracking: boolean;
  };
};

export type SettingsContextType = {
  settings?: SettingsState;
  setSettings: (settings: SettingsState) => void;
};

const DEFAULT_SETTINGS: SettingsState = {
  content: {
    language: "en",
    animations: true,
  },
  blog: {
    comments: true,
    "social-share": true,
  },
  other: {
    tracking: true,
  },
};

export const SettingsContext = createContext<SettingsContextType>({
  settings: DEFAULT_SETTINGS,
  setSettings() {},
});

SettingsContext.displayName = "Settings";

export function SettingsProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [settings, setSettings] = usePersistedState(
    "settings",
    DEFAULT_SETTINGS
  );

  async function updateSettings(state: SettingsState): Promise<void> {
    const currentLang = i18n?.language;
    const targetLang = state.content.language;

    if (targetLang !== currentLang) {
      const currentRoute = router.asPath;
      await router.push(currentRoute, currentRoute, { locale: targetLang });
    }

    setSettings(state);
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings: updateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
