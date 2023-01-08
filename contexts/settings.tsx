// Settings context
import React, { createContext, ReactNode } from "react";
import usePersistedState from "use-persisted-state-hook";

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

const DEFAULT_SETTINGS: SettingsState = {
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

export const SettingsContext = createContext<SettingsContextType>({
  settings: DEFAULT_SETTINGS,
  setSettings() {},
});

SettingsContext.displayName = "Settings";

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = usePersistedState(
    "settings",
    DEFAULT_SETTINGS
  );

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
