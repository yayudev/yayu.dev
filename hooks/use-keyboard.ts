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
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dependencies, onKeyDown]);
}
