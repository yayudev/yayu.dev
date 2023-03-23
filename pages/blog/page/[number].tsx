import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { DEFAULT_PAGE_SIZE } from "@/constants/blog";

import { blogApiService } from "@/services/client/blog-api";

import { BlogPageContent } from "@/components/blog/blog-page-content";

interface BlogPageProps {
  page: number;
  hasNextPage: boolean;
}

export const getStaticPaths = async () => {
  const data = await blogApiService.fetchPostListSize();
  const pages = Math.ceil(data.totalPosts / DEFAULT_PAGE_SIZE);

  const paths = Array.from(Array(pages)).map(
    (_, page) => `/blog/page/${page + 1}`
  );

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  locale = "en",
}) => {
  /**************
   * Pagination *
   **************/

  const page = params?.number as string;
  const parsedPage = parseInt(page, 10);

  const pageUrl = blogApiService.getPostListUrl(parsedPage);
  const data = await blogApiService.fetchPostList(parsedPage);
  const totalPages = Math.ceil(data.totalPosts / DEFAULT_PAGE_SIZE);

  /**************
   *   Locale   *
   **************/

  let localeProps = await serverSideTranslations(locale, [
    "common",
    "settings",
    "blog",
  ]);

  return {
    props: {
      hasNextPage: parsedPage < totalPages,
      page: parsedPage,
      fallback: {
        [pageUrl]: data,
      },
      ...localeProps,
    },
  };
};

const BlogPage: NextPage<BlogPageProps> = ({
  page,
  hasNextPage = false,
}: BlogPageProps) => {
  return <BlogPageContent page={page} hasNextPage={hasNextPage} />;
};

export default BlogPage;
