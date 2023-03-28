import { useTranslation } from "next-i18next";
import Head from "next/head";

import { blogApiService } from "@/services/client/blog-api";

import { BlogPagination } from "@/components/blog/blog-pagination";
import { BlogPostsList } from "@/components/blog/blog-posts-list";
import { PageLayout } from "@/layouts/page";

interface BlogPageContentProps {
  page: number;
  hasNextPage?: boolean;
}

export function BlogPageContent({
  page,
  hasNextPage = false,
}: BlogPageContentProps) {
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
}
