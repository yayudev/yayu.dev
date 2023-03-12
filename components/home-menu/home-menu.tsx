import { useEffect } from "react";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { MEDIA_QUERY_TABLET } from "@/config/media-queries";
import { useMobileLayout } from "@/hooks/user-mobile-layout";
import { showMenuOnMobileAtom } from "@/state/application";

import { HomeMenuList } from "@/components/home-menu/home-menu-list";
import { CloseMenuIcon } from "@/components/shared/close-menu-icon";

interface MenuButtonProps {
  showOnMobile: boolean;
  fullWidth: boolean;
}

const Container = styled.nav<MenuButtonProps>`
  background-image: url("/images/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: ${(props) => (props.fullWidth ? "100%" : "300px")};
  min-width: 300px;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  box-shadow: 0 0 20px 2px var(--box-shadow-color);
  transition: width 250ms ease-in-out, opacity 250ms ease-in-out,
    transform 250ms ease-in-out;
  z-index: 2;

  ${MEDIA_QUERY_TABLET} {
    position: absolute;
    min-width: auto;
    width: 100vw;
    top: 0;
    left: 0;
    box-shadow: none;
    margin-left: -100%;
    ${({ showOnMobile }) =>
      showOnMobile ? "transform: translateX(100%);" : ""}
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
  );
}
