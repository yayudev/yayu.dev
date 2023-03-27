import { CustomLocalStorageWithListenerStrategy } from "./LocalStorageWithChangeListenerStrategy";

beforeEach(() => {
  localStorage.clear();
});

test("should call onSet callback when setItem is called", () => {
  const onSet = jest.fn();
  const customLocalStorageWithListenerStrategy =
    new CustomLocalStorageWithListenerStrategy(onSet);
  customLocalStorageWithListenerStrategy.setItem("test", "value");

  expect(onSet).toBeCalledWith("", "value");
});

test("should call onSet callback when setItem is called with a different value", () => {
  const onSet = jest.fn();
  const customLocalStorageWithListenerStrategy =
    new CustomLocalStorageWithListenerStrategy(onSet);
  customLocalStorageWithListenerStrategy.setItem("test", "value");
  customLocalStorageWithListenerStrategy.setItem("test", "value2");

  expect(onSet).toBeCalledWith("value", "value2");
});

test("should not call onSet callback when setItem is called with the same value", () => {
  const onSet = jest.fn();

  const customLocalStorageWithListenerStrategy =
    new CustomLocalStorageWithListenerStrategy(onSet);
  customLocalStorageWithListenerStrategy.setItem("test", "value");
  customLocalStorageWithListenerStrategy.setItem("test", "value");

  expect(onSet).toBeCalledTimes(1);
  expect(onSet).toBeCalledWith("", "value");
});
