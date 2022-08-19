import styled from "styled-components";
import { HomeMenuList } from "@/components/home-menu/home-menu-list";
import Image from "next/image";
import Link from "next/link";

const Container = styled.main`
  background-image: url("/images/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const LogoImageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export function HomeMenu() {
  return (
    <Container>
      <Content>
        <Link href="/" passHref>
          <LogoImageLink>
            <Image src="/images/logo.svg" alt="logo" width={300} height={300} />
          </LogoImageLink>
        </Link>

        <HomeMenuList />
      </Content>
    </Container>
  );
}
