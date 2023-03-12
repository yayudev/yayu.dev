import { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";

export type LocalStorageChangeCallback = (
  previousValue: string,
  newValue: string
) => void;

export class CustomLocalStorageWithListenerStrategy
  implements SyncStorage<string>
{
  private readonly onSet?: LocalStorageChangeCallback;

  constructor(onSet?: LocalStorageChangeCallback) {
    this.onSet = onSet;
  }

  public getItem(key: string) {
    const item = localStorage.getItem(key);
    return item ?? "";
  }

  public setItem(key: string, nextValue: string) {
    const previousValue = this.getItem(key);

    localStorage.setItem(key, nextValue);

    if (this.onSet) {
      this.onSet(previousValue, nextValue);
    }
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
