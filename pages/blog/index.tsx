import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { BlogPagination } from "@/components/blog/blog-pagination";
import { BlogPostsList } from "@/components/blog/blog-posts-list";
import { PageLayout } from "@/layouts/page";
import { BlogApiService } from "@/services/blog-api";

const DEFAULT_PAGE_SIZE = 5;

interface BlogIndexProps {
  page: number;
  hasNextPage: boolean;
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
}) => {
  /**************
   * Pagination *
   **************/

  let { page = "1" } = query ?? {};

  if (Array.isArray(page)) {
    page = page[0];
  }

  const pageNumber = parseInt(page, 10);
  const pageUrl = BlogApiService.getPostListUrl(pageNumber);
  const data = await BlogApiService.fetchPostList(pageNumber);
  const hasNextPage = data.totalPosts > DEFAULT_PAGE_SIZE * pageNumber;

  /**************
   *   Locale   *
   **************/

  let localeProps = {};

  if (locale) {
    localeProps = await serverSideTranslations(locale, [
      "common",
      "settings",
      "blog",
    ]);
  }

  return {
    props: {
      ...localeProps,
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
  const { t } = useTranslation("blog");
  const { postList, isError, isLoading } = BlogApiService.usePostList(page);

  return (
    <PageLayout
      title={t("title") ?? ""}
      isLoading={isLoading}
      hasError={isError}
      subtitle={page !== 1 ? t("page-number", { n: page }) ?? "" : ""}
    >
      <Head>
        <title>{t("page-title")}</title>
        <meta name="description" content={t("page-description") ?? ""} />
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
