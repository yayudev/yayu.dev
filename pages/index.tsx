// noinspection JSUnusedGlobalSymbols

import { NextPage } from "next";
import Head from "next/head";

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
    </>
  );
};

export default Home;
