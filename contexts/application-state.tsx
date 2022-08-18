// Settings context
import React, { createContext, ReactNode, useState } from "react";

export type ApplicationState = {
  showSettings: boolean;
};

export type ApplicationStateContextType = {
  applicationState?: ApplicationState;
  setApplicationState: (state: ApplicationState) => void;
};

const DEFAULT_APPLICATION_STATE: ApplicationState = {
  showSettings: false,
};

export const ApplicationStateContext =
  createContext<ApplicationStateContextType>({
    applicationState: DEFAULT_APPLICATION_STATE,
    setApplicationState() {},
  });

ApplicationStateContext.displayName = "ApplicationState";

export function ApplicationStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [applicationState, setApplicationState] = useState<ApplicationState>(
    DEFAULT_APPLICATION_STATE
  );

  return (
    <ApplicationStateContext.Provider
      value={{
        applicationState,
        setApplicationState,
      }}
    >
      {children}
    </ApplicationStateContext.Provider>
  );
}
