import { NextPage } from "next";
import Head from "next/head";
import { HomeMenu } from "@/components/home/home-menu";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>yayu.dev</title>
        <meta
          name="description"
          content="Hey, I'm Arturo Coronel. This is my personal website :)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeMenu />
    </>
  );
};

export default Home;
