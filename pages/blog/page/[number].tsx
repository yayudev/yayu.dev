import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { PageLayout } from "@/layouts/page";
import { BlogPagination } from "@/components/blog/blog-pagination";
import { BlogPostsList } from "@/components/blog/blog-posts-list";
import { blogApiService } from "@/services/client/blog-api";
import { DEFAULT_PAGE_SIZE } from "@/constants/blog";

interface BlogPageProps {
  page: number;
  hasNextPage: boolean;
}

export const getStaticPaths = async () => {
  const data = await blogApiService.fetchAllPostsSlugs();
  const pages = Math.ceil(data.length / DEFAULT_PAGE_SIZE);

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

  const totalSlugs = await blogApiService.fetchAllPostsSlugs();
  const totalPages = Math.ceil(totalSlugs.length / DEFAULT_PAGE_SIZE);
  const pageUrl = blogApiService.getPostListUrl(parsedPage);
  const data = await blogApiService.fetchPostList(parsedPage);

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

export default BlogPage;
