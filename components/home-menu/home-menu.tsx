import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

import { MEDIA_QUERY_TABLET } from "@/constants/media-queries";

import { showMenuOnMobileAtom } from "@/state/application";

import { useMobileLayout } from "@/hooks/use-mobile-layout";

import { HomeMenuList } from "@/components/home-menu/home-menu-list";
import { CloseMenuIcon } from "@/components/shared/close-menu-icon";

interface MenuButtonProps {
  showOnMobile: boolean;
  fullWidth: boolean;
}

const blurOutAnimation = keyframes`
  0% {
    filter: brightness(.8) blur(0px);    
  }
  100% {
    filter: brightness(0.6) blur(5px);
  }
`;

const lightUpAnimation = keyframes`
  0% {
    filter: brightness(0.3)    
  }
  100% {
    filter: brightness(1);
  }
`;

const Container = styled.nav<MenuButtonProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "300px")};
  min-width: 300px;
  //noinspection ALL
  height: 100vh;
  //noinspection ALL
  height: 100svh;
  overflow: hidden;
  box-shadow: 0 0 20px 2px var(--box-shadow-color);
  transition: width 250ms ease-in-out, opacity 250ms ease-in-out,
    transform 250ms ease-in-out;
  z-index: 2;

  ${(props) =>
    props.fullWidth
      ? css`
          animation: ${lightUpAnimation} 1s ease-in-out forwards;
        `
      : ""}

  ${MEDIA_QUERY_TABLET} {
    position: absolute;
    min-width: auto;
    width: 100vw;
    top: 0;
    left: 0;
    box-shadow: none;
    margin-left: -120%; // Make sure drop shadow is not visible
    ${({ showOnMobile }) =>
      showOnMobile ? "transform: translateX(120%);" : ""}
  }
`;

export const BackgroundImage = styled(Container)<MenuButtonProps>`
  background-image: url("/images/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.6) blur(5px);

  ${(props) =>
    props.fullWidth
      ? css`
          animation: ${blurOutAnimation} 0.5s ease-in-out forwards;
        `
      : ""}

  position: absolute;
  top: 0;
  left: 0;
  box-shadow: none;

  ${MEDIA_QUERY_TABLET} {
    box-shadow: none;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 1;

  overflow: hidden;
`;

const LogoImageLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

const LogoImage = styled(Image)`
  max-width: 100%;
  height: auto;
  width: auto;
`;

export function HomeMenu() {
  const isMobileLayout = useMobileLayout();
  const [showOnMobile, setShowOnMobile] = useAtom(showMenuOnMobileAtom);

  const router = useRouter();
  const isHome = router.route === "/";

  useEffect(() => {
    if (isMobileLayout) {
      setShowOnMobile(false);
    }

    // No need to include setShowOnMobile in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileLayout]);

  useEffect(() => {
    setShowOnMobile(false);

    // No need to include setShowOnMobile in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route]);

  function toggleMobileMenu() {
    setShowOnMobile(!showOnMobile);
  }

  return (
    <>
      <BackgroundImage
        showOnMobile={isHome || showOnMobile}
        fullWidth={isHome}
      />
      <Container showOnMobile={isHome || showOnMobile} fullWidth={isHome}>
        {!isHome && (
          <CloseMenuIcon
            showCloseIcon={showOnMobile}
            onClick={toggleMobileMenu}
          />
        )}

        <Content>
          <LogoImageLink href="/" passHref>
            <LogoImage
              src="/images/logo.svg"
              alt="logo"
              width={300}
              height={300}
              priority
            />
          </LogoImageLink>

          <HomeMenuList />
        </Content>
      </Container>
    </>
  );
}
