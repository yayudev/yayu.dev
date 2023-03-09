import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useWindowSize } from "@/hooks/use-window-size";

export interface MarqueeScrollerProps {
  // Scroll duration in ms
  duration?: number;
  // Time after render before the animation starts
  preAnimationDelay?: number;
  // Time after animation ends before starting it again
  postAnimationDelay?: number;
  // Displayed text
  text: string;
  // Accessibility text
  ariaLabel?: string;
}

type InternalAnimationDataRefType = {
  isFirstFrame: boolean;
  currentAnimationFrame?: number;
  currentAnimationStartTime?: number;
  activeTimeout?: NodeJS.Timeout;
};

const Container = styled.div`
  overflow: hidden;
  margin-left: 2rem;
  width: 100%;
`;

const Text = styled.p`
  color: var(--alt-text-color);
  font-size: 1.5rem;
  margin: 1rem 1rem 1rem 0;
  flex: 1;
  min-height: 2rem;
  width: 100%;
  white-space: nowrap;
`;

export function MarqueScroller({
  text,
  ariaLabel = "",
  duration = 10000,
  preAnimationDelay = 3000,
  postAnimationDelay = 3000,
}: MarqueeScrollerProps) {
  const windowSize = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  // Use a ref to store state and avoid re-rendering the component on every frame,
  // we use gpu animation instead using (transform + will-change).
  const animationDataRef = useRef<InternalAnimationDataRefType>();

  // Frame-by-frame animation logic
  function animate(timestamp: DOMHighResTimeStamp) {
    if (!containerRef.current || !animationDataRef.current) return;

    // Setup for animation on the first frame.
    if (animationDataRef.current.isFirstFrame) {
      animationDataRef.current.currentAnimationStartTime = timestamp;
      containerRef.current.style.willChange = "transform";
      animationDataRef.current.isFirstFrame = false;
    }

    const currentAnimationTimeElapsed =
      timestamp -
      (animationDataRef.current.currentAnimationStartTime ?? timestamp);

    // If animation exceded the duration, restart it after {postAnimationDelay} ms.
    if (currentAnimationTimeElapsed > duration) {
      clearAnimation();

      animationDataRef.current.activeTimeout = setTimeout(() => {
        animationDataRef.current = {
          currentAnimationStartTime: 0,
          isFirstFrame: true,
          activeTimeout: undefined,
        };

        animationDataRef.current.currentAnimationFrame =
          requestAnimationFrame(animate);
      }, postAnimationDelay);

      return;
    }

    // Scroll the content.
    const currentOffset =
      containerRef.current.scrollWidth *
      (currentAnimationTimeElapsed / duration);
    containerRef.current.style.transform = `translateX(-${currentOffset}px)`;

    // Go to next frame.
    animationDataRef.current.currentAnimationFrame =
      requestAnimationFrame(animate);
  }

  // Animation cancel
  function clearAnimation() {
    if (!animationDataRef.current) return;

    // Clear current animation (when an animation is already running)
    if (animationDataRef.current?.currentAnimationFrame) {
      cancelAnimationFrame(animationDataRef.current?.currentAnimationFrame);
    }

    // Clear upcoming animation (when one cycle has just finished)
    if (animationDataRef.current?.activeTimeout) {
      clearTimeout(animationDataRef.current?.activeTimeout);
    }

    // Reset animation setup
    if (containerRef.current) {
      containerRef.current.style.willChange = "initial";
      containerRef.current.style.transform = "translateX(0px)";
    }

    animationDataRef.current.isFirstFrame = true;
  }

  // Animation start
  function triggerAnimation() {
    // Skip animation if the text doesn't overflow the container.
    const scrollSize =
      (containerRef.current?.scrollWidth ?? 0) -
      (containerRef.current?.clientWidth ?? 0);

    if (scrollSize <= 0) return;

    // Reset the animation state.
    animationDataRef.current = {
      currentAnimationStartTime: 0,
      isFirstFrame: true,
    };

    // Trigger animation after {preAnimationDelay} ms, to give the user a chance to read.
    animationDataRef.current.activeTimeout = setTimeout(() => {
      if (!animationDataRef.current) return;

      animationDataRef.current.currentAnimationFrame =
        requestAnimationFrame(animate);
    }, preAnimationDelay);
  }

  useEffect(
    () => {
      // Clear any existing or queued animation.
      clearAnimation();

      // Skip when there's no text, thus animation is not needed.
      if (!text) return;

      // Start animation.
      triggerAnimation();
    },
    // eslint disabled because `triggerAnimation` is not actually required as a dep here.
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [
      text, // Restart the animation when the text changes
      windowSize?.width, // Also restart when window size changes as element size changed.
    ]
  );

  return (
    <Container>
      <Text ref={containerRef} aria-label={ariaLabel}>
        {text}
      </Text>
    </Container>
  );
}
