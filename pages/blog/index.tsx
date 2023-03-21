import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import { DEFAULT_PAGE_SIZE } from "@/constants/blog";

import { blogApiService } from "@/services/client/blog-api";

import { BlogPagination } from "@/components/blog/blog-pagination";
import { BlogPostsList } from "@/components/blog/blog-posts-list";
import { PageLayout } from "@/layouts/page";

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
  const { t } = useTranslation();
  const { postList, isError, isLoading } = blogApiService.usePostList(page);

  return (
    <PageLayout
      title={t("blog:title") ?? ""}
      isLoading={isLoading}
      hasError={isError}
      subtitle={page !== 1 ? t("blog:page-number", { n: page }) ?? "" : ""}
    >
      <Head>
        <title>{t("blog:page-title")}</title>
        <meta name="description" content={t("blog:page-description") ?? ""} />
        <meta property="og:title" content={t("blog:page-title") ?? ""} />
        <meta
          property="og:description"
          content={t("blog:page-description") ?? ""}
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      {postList && (
        <>
          <BlogPostsList posts={postList} />
          <BlogPagination
            prevUrl={page > 1 ? `/blog/page/${page - 1}` : undefined}
            nextUrl={hasNextPage ? `/blog/page/${page + 1}` : undefined}
          />
        </>
      )}
    </PageLayout>
  );
};

export default BlogIndex;
