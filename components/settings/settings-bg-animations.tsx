import { motion } from "framer-motion";
import styled from "styled-components";

import { useAnimationsEnabled } from "@/hooks/use-animations-enabled";

interface SettingsBGWrapperProps {
  width: number;
  height: number;
  reversed?: boolean;
}

const StyledSVG = styled.svg<{ reversed: boolean }>`
  position: absolute;
  user-select: none;
  transform-origin: center;
  overflow: hidden;
  //noinspection ALL
  max-height: 100vh;
  //noinspection ALL
  max-height: 100svh;
  max-width: 100vw;

  transform: scale(${({ reversed }) => (reversed ? -1 : 1)}) !important;
`;

export function SettingsBGAnimations({
  width,
  height,
  reversed = false,
}: SettingsBGWrapperProps) {
  const animationsEnabled = useAnimationsEnabled();
  const positionStyles = reversed
    ? { bottom: 0, right: 0 }
    : { top: 0, left: 0 };

  return (
    <StyledSVG
      width={width}
      height={height}
      viewBox="0 0 752 716"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      reversed={reversed}
      style={positionStyles}
      tabIndex={-1}
      focusable={false}
      aria-label="background animation"
    >
      <motion.circle
        animate={
          animationsEnabled
            ? {
                r: [400, 420],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          duration: 3.5,
        }}
        cx="0.5"
        cy="5.5"
        r="414.5"
        stroke="#94917E"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <motion.circle
        animate={
          animationsEnabled
            ? {
                cx: [-10, -5, 0, 5, 10, 5, 0, -5, -10],
                cy: [0, 5, 10, 5, 0, -5, -10, -5, 0],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          duration: 5,
          type: "tween",
          ease: "linear",
        }}
        cx="-2.71378"
        cy="2.28616"
        r="395.676"
        stroke="#94917E"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <motion.line
        animate={
          animationsEnabled
            ? {
                x1: [531, 731],
                y1: [510, 714],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          duration: 6,
        }}
        x1="731.293"
        y1="714.707"
        x2="-89.707"
        y2="-106.293"
        stroke="#94917E"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <motion.line
        animate={
          animationsEnabled
            ? {
                x1: [520, 670],
                y1: [555, 705],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          duration: 8,
        }}
        x1="670.293"
        y1="705.707"
        x2="-150.707"
        y2="-115.293"
        stroke="#94917E"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <motion.line
        animate={
          animationsEnabled
            ? {
                x1: [551, 751],
                y1: [482, 682],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          duration: 3,
        }}
        x1="751.293"
        y1="682.707"
        x2="-69.707"
        y2="-138.293"
        stroke="#94917E"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
    </StyledSVG>
  );
}
