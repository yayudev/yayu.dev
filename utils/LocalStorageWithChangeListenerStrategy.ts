import { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";

/**
 * Callback to be called when the value is set.
 *
 * @param previousValue The previous value in localstorage before the change.
 * @param newValue The new value set after the change.
 */
export type LocalStorageChangeCallback = (
  previousValue: string,
  newValue: string
) => void;

/**
 * A custom strategy for the `atomWithStorage` utility that allows you to
 * listen to changes in the local storage.
 *
 */
export class CustomLocalStorageWithListenerStrategy
  implements SyncStorage<string>
{
  /* A callback that is called when the value is set. */
  private readonly onSet?: LocalStorageChangeCallback;

  /**
   * @param onSet A callback that is called when the value is set.
   */
  constructor(onSet?: LocalStorageChangeCallback) {
    this.onSet = onSet;
  }

  /**
   * Get an item from the local storage.
   *
   * @param key The key of the item to get.
   */
  public getItem(key: string) {
    const item = localStorage.getItem(key);
    return item ?? "";
  }

  /**
   * Set an item in the local storage.
   *
   * @param key The key of the item to set.
   * @param nextValue The value to set.
   */
  public setItem(key: string, nextValue: string) {
    const previousValue = this.getItem(key);

    // Skip if the value is the same
    if (previousValue === nextValue) {
      return;
    }

    localStorage.setItem(key, nextValue);

    if (this.onSet) {
      this.onSet(previousValue, nextValue);
    }
  }

  /**
   * Remove an item from the local storage.
   *
   * @param key The key of the item to remove.
   */
  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
