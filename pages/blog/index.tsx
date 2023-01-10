import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "../../layouts/page";
import { BlogPostsList } from "@/components/blog/blog-posts-list";
import { BlogApiService } from "../../services/blog-api";
import { BlogPagination } from "@/components/blog/blog-pagination";

const DEFAULT_PAGE_SIZE = 5;

interface BlogIndexProps {
  page: number;
  hasNextPage: boolean;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let { page = "1" } = query ?? {};

  if (Array.isArray(page)) {
    page = page[0];
  }

  const pageNumber = parseInt(page, 10);
  const pageUrl = BlogApiService.getPostListUrl(pageNumber);
  const data = await BlogApiService.fetchPostList(pageNumber);

  const hasNextPage = data.totalPosts > DEFAULT_PAGE_SIZE * pageNumber;

  return {
    props: {
      hasNextPage,
      page: pageNumber,
      fallback: {
        [pageUrl]: data,
      },
    },
  };
};

const BlogIndex: NextPage<BlogIndexProps> = ({
  page,
  hasNextPage = false,
}: BlogIndexProps) => {
  const { postList, isError, isLoading } = BlogApiService.usePostList(page);

  return (
    <PageLayout
      title="Blog"
      isLoading={isLoading}
      hasError={isError}
      subtitle={page !== 1 ? `Page ${page}` : ""}
    >
      <Head>
        <title>yayu.dev | Blog - Page {page}</title>
        <meta
          name="description"
          content="Hey, I'm Arturo Coronel. This is my personal website :)"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      {postList && (
        <>
          <BlogPostsList posts={postList} />
          <BlogPagination
            prevUrl={page > 1 ? `/blog?page=${page - 1}` : undefined}
            nextUrl={hasNextPage ? `/blog?page=${page + 1}` : undefined}
          />
        </>
      )}
    </PageLayout>
  );
};

export default BlogIndex;
