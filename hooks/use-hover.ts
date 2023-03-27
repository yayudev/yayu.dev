import { MutableRefObject, useEffect, useRef, useState } from "react";

export function useHover<T extends HTMLElement>(): [
  MutableRefObject<T | null>,
  boolean
] {
  const [value, setValue] = useState<boolean>(false);

  const ref = useRef<T | null>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node: T = ref.current as T;
    if (!node) return;

    node.addEventListener("mouseover", handleMouseOver);
    node.addEventListener("mouseout", handleMouseOut);
    node.addEventListener("focus", handleMouseOver);
    node.addEventListener("blur", handleMouseOut);

    return () => {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseout", handleMouseOut);
      node.removeEventListener("focus", handleMouseOver);
      node.removeEventListener("blur", handleMouseOut);
    };
  }, []);

  return [ref, value];
}
