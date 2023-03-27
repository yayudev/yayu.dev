import { useCallback, useEffect } from "react";

export function useKeyboard(
  keys: string[],
  onTyping: (event: KeyboardEvent) => void,
  dependencies: any[]
): void {
  const onKeyDown = useCallback(
    (keydownEvent: KeyboardEvent): void => {
      if (!keys.includes(keydownEvent.key)) return;

      onTyping(keydownEvent);
    },
    [keys, onTyping]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dependencies, onKeyDown]);
}
