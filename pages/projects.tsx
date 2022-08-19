import { NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "../layouts/page";

const Projects: NextPage = () => {
  return (
    <PageLayout title="Projects">
      <Head>
        <title>yayu.dev | projects</title>
        <meta
          name="description"
          content="Hey, I'm Arturo Coronel. This is my personal website :)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>Hello from projects</p>
      </div>
    </PageLayout>
  );
};

export default Projects;
