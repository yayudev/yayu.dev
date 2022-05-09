import { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";

import { HomeMenu } from "@/components/home/home-menu";

const Container = styled.main`
  background-image: url("/images/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
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

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>yayu.dev</title>
        <meta
          name="description"
          content="Hey, I'm Arturo Coronel. This is my personal website :)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Image src="/images/logo.svg" alt="logo" width={300} height={300} />

        <HomeMenu />
      </Content>
    </Container>
  );
};

export default Home;
