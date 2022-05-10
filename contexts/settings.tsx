// Settings context
import React, { useState, createContext, ReactNode } from "react";
import createPersistedState from "use-persisted-state";

export type SettingsState = {
  global: {
    language: string;
    animations: boolean;
    sounds: boolean;
    allowTracking: boolean;
  };
  blog: {
    comments: boolean;
    share: boolean;
  };
};

export type SettingsContextType = {
  settings?: SettingsState;
  setSettings: (settings: SettingsState) => void;
};

const DEFAULT_SETTINGS = {
  global: {
    language: "English",
    animations: true,
    sounds: true,
    allowTracking: true,
  },
  blog: {
    comments: true,
    share: true,
  },
};

const useSettingsState = createPersistedState<SettingsState>("settings");

export const SettingsContext = createContext<SettingsContextType>({
  settings: DEFAULT_SETTINGS,
  setSettings() {},
});

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useSettingsState();

  if (!settings) {
    setSettings(DEFAULT_SETTINGS);
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
