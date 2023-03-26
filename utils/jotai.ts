import { atomWithStorage } from "jotai/utils";

import {
  CustomLocalStorageWithListenerStrategy,
  LocalStorageChangeCallback,
} from "@/utils/LocalStorageWithChangeListenerStrategy";

/**
 * Creates an atom that persists its value to localStorage and calls a listener
 * when the key is set to a new value.
 *
 * @param key The key to use in localStorage
 * @param initialValue The initial value to use if the key is not found in
 *                     localStorage
 * @param onSet The callback to call when the key is set to a new value
 * @returns A writable atom that persists its value to localStorage.
 */
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
