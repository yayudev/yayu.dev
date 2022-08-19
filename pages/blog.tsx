import { NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "../layouts/page";

const Blog: NextPage = () => {
  return (
    <PageLayout title="Blog">
      <Head>
        <title>yayu.dev | blog</title>
        <meta
          name="description"
          content="Hey, I'm Arturo Coronel. This is my personal website :)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>Hello from blog</p>
      </div>
    </PageLayout>
  );
};

export default Blog;
