import { useEffect } from "react";

export function useKeyboard(
  keys: string[],
  onTyping: (event: KeyboardEvent) => void
): void {
  function onKeyDown(keydownEvent: KeyboardEvent): void {
    if (!keys.includes(keydownEvent.key)) return;

    onTyping(keydownEvent);
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
}
