import { useAtom } from "jotai";

import { animationsAtom } from "@/state/application";
import { SettingsToggleOptions } from "@/types/settings-menu";

export function useAnimationsEnabled(): boolean {
  const [animations] = useAtom(animationsAtom);

  return animations === SettingsToggleOptions.ON;
}
