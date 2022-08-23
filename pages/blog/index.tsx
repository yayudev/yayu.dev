import { NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "../../layouts/page";
import { usePostsList } from "@/hooks/blog-api";

const BlogIndex: NextPage = () => {
  const { postList, isError, isLoading } = usePostsList();

  return (
    <PageLayout title="Blog">
      <Head>
        <title>yayu.dev | blog</title>
        <meta
          name="description"
          content="Hey, I'm Arturo Coronel. This is my personal website :)"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <div>
        <p>Hello from blog</p>

        {postList && JSON.stringify(postList)}
      </div>
    </PageLayout>
  );
};

export default BlogIndex;
