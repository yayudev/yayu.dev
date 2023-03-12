import { DiscussionEmbed } from "disqus-react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RenderIfVisible from "react-render-if-visible";
import styled from "styled-components";

import { PageLayout } from "@/layouts/page";
import { BlogApiService } from "@/services/blog-api";

import { BlogSocialShareButtons } from "@/components/blog/blog-social-share-buttons";

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

const TitleContainer = styled.div``;

const CommentsContainer = styled.div`
  min-height: 10rem;
  padding: 0 2rem;
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
  const router = useRouter();
  const { t } = useTranslation();
  const { post, isError, isLoading } = BlogApiService.useIndividualPost(postId);
  const pageFullUrl = `${process.env.SERVER_URL}${router.asPath}`;

  return (
    <PageLayout
      title={post?.title ?? ""}
      isAestheticTitle={false}
      isLoading={isLoading}
      hasError={isError}
    >
      <Head>
        <title>{t("blog:page-individual-title", { title: post?.title })}</title>
        <meta name="description" content={post?.excerpt} />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.excerpt} />
        <meta property="og:image" content={post?.image} />
      </Head>

      <TitleContainer>
        <BlogSocialShareButtons url={pageFullUrl} />
      </TitleContainer>

      <PostContainer>
        {post && <div dangerouslySetInnerHTML={{ __html: post?.html }} />}
      </PostContainer>

      <BlogSocialShareButtons url={pageFullUrl} />

      <CommentsContainer>
        <RenderIfVisible stayRendered>
          <DiscussionEmbed
            shortname="datyayu"
            config={{
              identifier: postId,
              title: post?.title,
            }}
          />
        </RenderIfVisible>
      </CommentsContainer>
    </PageLayout>
  );
};

export default BlogPostPage;
