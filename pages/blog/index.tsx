import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "../../layouts/page";
import { BlogPostsList } from "@/components/blog/blog-posts-list";
import { BlogApiService } from "../../services/blog-api";

interface BlogIndexProps {
  page: number;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let { page = "1" } = query ?? {};

  if (Array.isArray(page)) {
    page = page[0];
  }

  const pageNumber = parseInt(page, 10);
  const pageUrl = BlogApiService.getPostListUrl(pageNumber);
  const data = await BlogApiService.fetchPostList(pageNumber);

  return {
    props: {
      page,
      fallback: {
        [pageUrl]: data,
      },
    },
  };
};

const BlogIndex: NextPage<BlogIndexProps> = ({ page }: BlogIndexProps) => {
  const { postList, isError, isLoading } = BlogApiService.usePostList(page);

  return (
    <PageLayout title="Blog" isLoading={isLoading} hasError={isError}>
      <Head>
        <title>yayu.dev | blog {page}</title>
        <meta
          name="description"
          content="Hey, I'm Arturo Coronel. This is my personal website :)"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      {postList && <BlogPostsList posts={postList} />}
    </PageLayout>
  );
};

export default BlogIndex;
