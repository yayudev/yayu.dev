import { useEffect, useState } from "react";

import { useWindowSize } from "@/hooks/use-window-size";
import { MAX_WIDTH_TABLET } from "@/config/media-queries";

export function useMobileLayout(): boolean {
  const [mobileLayout, setMobileLayout] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    const isMobileResolution = windowSize.width < MAX_WIDTH_TABLET;
    setMobileLayout(isMobileResolution);
  }, [windowSize.width]);

  return mobileLayout;
}
