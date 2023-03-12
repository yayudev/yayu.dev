import { atomWithStorage } from "jotai/utils";

import {
  CustomLocalStorageWithListenerStrategy,
  LocalStorageChangeCallback,
} from "@/utils/LocalStorageWithChangeListenerStrategy";

export function atomWithStorageAndSideEffects(
  key: string,
  initialValue: string,
  onSet: LocalStorageChangeCallback
) {
  return atomWithStorage(
    key,
    initialValue,
    new CustomLocalStorageWithListenerStrategy(onSet)
  );
}
