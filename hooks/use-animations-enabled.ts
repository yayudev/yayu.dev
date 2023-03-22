import { useAtom } from "jotai";

import { SettingsToggleOptions } from "@/types/settings-menu";

import { animationsAtom } from "@/state/application";

export function useAnimationsEnabled(): boolean {
  const [animations] = useAtom(animationsAtom);

  return animations === SettingsToggleOptions.ON;
}
