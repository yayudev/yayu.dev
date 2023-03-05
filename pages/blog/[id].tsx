import { GetServerSideProps } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { PageLayout } from "@/layouts/page";
import { BlogApiService } from "@/services/blog-api";

interface BlogPostProps {
  postId: string;
}

const PostContainer = styled.div`
  padding: 0 1rem;
  font-family: "Open Sans", "arial", sans-serif, serif;
  font-size: 1.3em;
  line-height: 1.6em;

  p {
    line-height: 2.5rem;
    margin: 2rem 0;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 4rem;
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--background-for-content);
    padding: 0.5rem 0;
  }

  blockquote {
    font-size: 1.1rem;
    font-weight: 400;
    width: calc(100% - 5rem);
    margin: 0 auto;
    font-style: italic;
    box-sizing: content-box;
    background: var(--quote-background);
    padding: 1rem 2rem;

    p {
      margin: 0;
    }
  }

  code {
    background-color: var(--inline-code-background);
    color: var(--inline-code-color);
    padding: 0.1rem 0.5rem;
  }

  pre {
    background-color: var(--code-block-background);
    padding: 1rem;
    margin: 2rem 0;
    overflow-y: auto;

    code {
      background-color: var(--code-block-background);
      color: white; /* TODO: add code highlighting */
      max-width: 100%;
    }
  }

  a {
    color: var(--clickable-link-color);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
}) => {
  /**************
   * Page data  *
   **************/

  const postId = query.id as string;

  const pageUrl = BlogApiService.getIndividualPostUrl(postId);
  const data = await BlogApiService.fetchIndividualPost(postId);

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
      postId,
      fallback: {
        [pageUrl]: data,
      },
    },
  };
};

const BlogPostPage = ({ postId }: BlogPostProps) => {
  const { t } = useTranslation("blog");
  const { post, isError, isLoading } = BlogApiService.useIndividualPost(postId);

  return (
    <PageLayout
      title={post?.title ?? ""}
      isAestheticTitle={false}
      isLoading={isLoading}
      hasError={isError}
    >
      <Head>
        <title>{t("page-individual-title", { title: post?.title })}</title>
        <meta name="description" content={post?.excerpt} />
      </Head>

      <PostContainer>
        {post && <div dangerouslySetInnerHTML={{ __html: post?.html }} />}
      </PostContainer>
    </PageLayout>
  );
};

export default BlogPostPage;
