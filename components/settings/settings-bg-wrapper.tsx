import styled from "styled-components";

import { SettingsBorder } from "./settings-border";
import { SettingsBGAnimations } from "./settings-bg-animations";

interface SettingsBGWrapperProps {
  children: React.ReactNode;
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
`;

export function SettingsBGWrapper({ children }: SettingsBGWrapperProps) {
  return (
    <Container>
      <SettingsBGAnimations width={1000} height={1000} />
      <SettingsBorder />
      <Content>{children}</Content>
      <SettingsBGAnimations width={1000} height={1000} reversed />
      <SettingsBorder />
    </Container>
  );
}
