import styled, { css, keyframes } from "styled-components";

interface HomeMenuItemUnderlineProps {
  active: boolean;
}

const fadeIn = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const animationMixin = css`
  ${fadeIn} .3s ease-in-out
`;

const InvisibleUnderline = styled.span`
  height: 2px;
  width: 100%;
  opacity: 0;
`;

const Underline = styled.span`
  background-color: var(--link-color);
  height: 2px;
  width: 100%;
  filter: drop-shadow(0 0 0.5rem var(--link-color));

  animation: ${animationMixin};
  animation-fill-mode: forwards;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 7px;
    background-color: var(--link-color);
    border-radius: 50%;
    transform: translateX(-250%) translateY(-35%);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 7px;
    background-color: var(--link-color);
    border-radius: 50%;
    transform: translateX(250%) translateY(-35%);
  }
`;

export function HomeMenuItemUnderline({
  active = false,
}: HomeMenuItemUnderlineProps) {
  if (active) {
    return <Underline />;
  }

  return <InvisibleUnderline />;
}
