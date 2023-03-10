import styled from "styled-components";
import { HomeMenuList } from "@/components/home-menu/home-menu-list";
import Image from "next/image";
import Link from "next/link";
import { MAX_WIDTH_TABLET, MEDIA_QUERY_TABLET } from "@/config/media-queries";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/use-window-size";
import { HomeMenuIcon } from "@/components/home-menu/home-menu-icon";

const Container = styled.nav<{ activeOnMobile: boolean; fullWidth: boolean }>`
  background-image: url("/images/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: ${(props) => (props.fullWidth ? "100%" : "300px")};
  min-width: 300px;
  height: 100vh;
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
    ${(props) => (props.activeOnMobile ? "transform: translateX(100%);" : "")}
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
  const [activeOnMobile, setActiveOnMobile] = useState<boolean>(false);

  const router = useRouter();
  const windowSize = useWindowSize();
  const isHome = router.route === "/";

  useEffect(() => {
    if ((windowSize?.width ?? 0) > MAX_WIDTH_TABLET) {
      setActiveOnMobile(false);
    }
  }, [windowSize.width]);

  useEffect(() => {
    setActiveOnMobile(false);
  }, [router.route]);

  function toggleMobileMenu() {
    setActiveOnMobile(!activeOnMobile);
  }

  return (
    <Container activeOnMobile={activeOnMobile} fullWidth={isHome}>
      <HomeMenuIcon
        activeOnMobile={activeOnMobile}
        onClick={toggleMobileMenu}
      />

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
