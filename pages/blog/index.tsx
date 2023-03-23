import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { DEFAULT_PAGE_SIZE } from "@/constants/blog";

import { blogApiService } from "@/services/client/blog-api";

import { BlogPageContent } from "@/components/blog/blog-page-content";

interface BlogIndexProps {
  page: number;
  hasNextPage: boolean;
}

export const getStaticProps: GetStaticProps = async ({
  params,
  locale = "en",
}) => {
  /**************
   * Pagination *
   **************/

  let { page = "1" } = params ?? {};

  if (Array.isArray(page)) {
    page = page[0];
  }

  const pageNumber = parseInt(page, 10);
  const pageUrl = blogApiService.getPostListUrl(pageNumber);
  const data = await blogApiService.fetchPostList(pageNumber);
  const hasNextPage = data.totalPosts > DEFAULT_PAGE_SIZE * pageNumber;

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
      hasNextPage,
      page: pageNumber,
      fallback: {
        [pageUrl]: data,
      },
      ...localeProps,
    },
  };
};

const BlogIndex: NextPage<BlogIndexProps> = ({
  page,
  hasNextPage = false,
}: BlogIndexProps) => {
  return <BlogPageContent page={page} hasNextPage={hasNextPage} />;
};

export default BlogIndex;
