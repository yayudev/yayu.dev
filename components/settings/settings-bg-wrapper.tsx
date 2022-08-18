import { ReactNode } from "react";
import styled from "styled-components";

import { SettingsBorder } from "./settings-border";
import { SettingsBGAnimations } from "./settings-bg-animations";

interface SettingsBGWrapperProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--settings-background);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Content = styled.main`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  padding: 0 3rem;
  z-index: 1;
  transform-origin: left;
  will-change: opacity, transform;
`;

export function SettingsBGWrapper({ children }: SettingsBGWrapperProps) {
  return (
    <Container tabIndex={-1}>
      <SettingsBGAnimations width={1000} height={1000} />
      <SettingsBorder aria-label="decoration border" />
      <Content aria-label="Settings">{children}</Content>
      <SettingsBGAnimations width={1000} height={1000} reversed />
      <SettingsBorder aria-label="decoration border" />
    </Container>
  );
}
