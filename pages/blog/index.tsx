import { NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "../../layouts/page";
import { usePostsList } from "@/hooks/blog-api";
import styled from "styled-components";

const Content = styled.div`
  height: 100%;
`;

const BlogIndex: NextPage = () => {
  const { postList, isError, isLoading } = usePostsList();

  return (
    <PageLayout title="Blog" isLoading={isLoading}>
      <Head>
        <title>yayu.dev | blog</title>
        <meta
          name="description"
          content="Hey, I'm Arturo Coronel. This is my personal website :)"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Content>{postList && JSON.stringify(postList)}</Content>
    </PageLayout>
  );
};

export default BlogIndex;
