import { Provider, SetStateAction } from "jotai";
import { atomWithStorage, useHydrateAtoms } from "jotai/utils";
import { WritableAtom } from "jotai/vanilla/atom";
import { ReactNode } from "react";

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

interface HydrateAtomsProps<T> {
  initialValues: [WritableAtom<T, [SetStateAction<T>], any>, T][];
  children?: ReactNode;
}

function HydrateAtoms<T>({ initialValues, children }: HydrateAtomsProps<T>) {
  useHydrateAtoms(initialValues);
  return <>{children}</>;
}

export function TestProvider<T>({
  initialValues,
  children,
}: HydrateAtomsProps<T>) {
  return (
    <Provider>
      <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
    </Provider>
  );
}
