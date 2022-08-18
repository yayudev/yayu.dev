import styled from "styled-components";
import { HomeMenuList } from "@/components/home/home-menu-list";
import Image from "next/image";

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

export function HomeMenu() {
  return (
    <Container>
      <Content>
        <Image src="/images/logo.svg" alt="logo" width={300} height={300} />

        <HomeMenuList />
      </Content>
    </Container>
  );
}
