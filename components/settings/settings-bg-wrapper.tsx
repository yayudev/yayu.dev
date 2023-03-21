import { ReactNode } from "react";
import styled from "styled-components";

import { MEDIA_QUERY_TABLET } from "@/constants/media-queries";

import { useMobileLayout } from "@/hooks/user-mobile-layout";

import { SettingsBGAnimations } from "@/components/settings/settings-bg-animations";
import { SettingsBorder } from "@/components/settings/settings-border";

interface SettingsBGWrapperProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  //noinspection ALL
  height: 100vh;
  //noinspection ALL
  height: 100svh;
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

  ${MEDIA_QUERY_TABLET} {
    padding: 1rem 1rem 2rem 1rem;
  }
`;

export function SettingsBGWrapper({ children }: SettingsBGWrapperProps) {
  const isMobileLayout = useMobileLayout();

  return (
    <Container tabIndex={-1}>
      <SettingsBGAnimations width={1000} height={1000} />
      {!isMobileLayout && <SettingsBorder aria-label="decoration border" />}

      <Content aria-label="Settings">{children}</Content>

      <SettingsBGAnimations width={1000} height={1000} reversed />
      {!isMobileLayout && <SettingsBorder aria-label="decoration border" />}
    </Container>
  );
}
