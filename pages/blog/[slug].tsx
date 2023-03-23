import { DiscussionEmbed } from "disqus-react";
import matter from "gray-matter";
import { useAtom } from "jotai";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import RenderIfVisible from "react-render-if-visible";
import styled from "styled-components";

import { SettingsToggleOptions } from "@/types/settings-menu";

import { MEDIA_QUERY_TABLET } from "@/constants/media-queries";

import { blogApiService } from "@/services/client/blog-api";
import { commentsAtom } from "@/state/application";

import { useMobileLayout } from "@/hooks/user-mobile-layout";
import { formatDate } from "@/utils/date";

import { BlogSocialShareButtons } from "@/components/blog/blog-social-share-buttons";
import { PageLayout } from "@/layouts/page";

interface BlogPostProps {
  postId: string;
  mdxSource?: MDXRemoteSerializeResult;
  frontMatter?: matter.GrayMatterFile<string>;
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
    z-index: 2;
    top: 0;
    left: 0;
    background-color: var(--background-for-content);
    padding: 0.5rem 0;

    ${MEDIA_QUERY_TABLET} {
      position: static;
    }
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

  a {
    color: var(--clickable-link-color);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const TitleContainer = styled.div``;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-color);
`;

const DateText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 0 0 1rem 0;
  color: var(--text-color);
`;

const CommentsContainer = styled.div`
  min-height: 10rem;
  padding: 0 2rem;
`;

export const getStaticPaths = async () => {
  const postsSlugs = await blogApiService.fetchAllPostsSlugs();
  const paths = postsSlugs.slugs.map((slug) => `/blog/${slug}`);

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
   *   Locale   *
   **************/

  let localeProps = await serverSideTranslations(locale, [
    "common",
    "settings",
    "blog",
  ]);

  /**************
   * Page data  *
   **************/

  const postId = params?.slug as string;
  const pageUrl = blogApiService.getIndividualPostUrl(postId);
  const blogPost = await blogApiService.fetchIndividualPost(postId);

  const { content, data } = matter(blogPost?.markdown ?? "");
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      ...localeProps,
      postId,
      mdxSource,
      frontMatter: data,
      fallback: {
        [pageUrl]: data,
      },
    },
  };
};

const BlogPostPage = ({ postId, mdxSource }: BlogPostProps) => {
  const router = useRouter();
  const isMobileLayout = useMobileLayout();
  const { t } = useTranslation();
  const [commentsEnabled] = useAtom(commentsAtom);

  const { post, isError, isLoading } = blogApiService.useIndividualPost(postId);
  const pageFullUrl = `${process.env.SERVER_URL}${router.asPath}`;
  const date = post?.date ? formatDate(new Date(post.date)) : "";

  useEffect(() => {
    requestAnimationFrame(() => {
      if (typeof window === undefined) return;

      // prism may be initialized before the rendering is done if it loads too fast,
      // so we need to wait until the markdown rendering is done.
      (window as any)?.Prism?.highlightAll(document);
    });
  }, [post?.markdown]);

  return (
    <>
      <PageLayout
        title={!isMobileLayout && post?.title ? post.title : ""}
        isAestheticTitle={false}
        isLoading={isLoading}
        hasError={isError}
      >
        <Head>
          <title>
            {t("blog:page-individual-title", { title: post?.title })}
          </title>
          <meta name="description" content={post?.excerpt ?? ""} />
          <meta property="og:title" content={post?.title ?? ""} />
          <meta property="og:description" content={post?.excerpt ?? ""} />
          <meta
            property="og:image"
            content={post?.coverImage?.fileName ?? ""}
          />

          <link
            rel="stylesheet"
            href="https://unpkg.com/prism-themes@1.9.0/themes/prism-vsc-dark-plus.css"
          ></link>
        </Head>

        <TitleContainer>
          {isMobileLayout && <Title>{post?.title}</Title>}
          {date && <DateText>{t("blog:image-posted-on", { date })}</DateText>}
          <BlogSocialShareButtons url={pageFullUrl} />
        </TitleContainer>

        <PostContainer>
          {mdxSource && <MDXRemote {...mdxSource} />}
        </PostContainer>

        <BlogSocialShareButtons url={pageFullUrl} />

        {commentsEnabled === SettingsToggleOptions.ON && (
          <CommentsContainer>
            <RenderIfVisible stayRendered>
              <DiscussionEmbed
                shortname="datyayu"
                config={{
                  identifier: postId,
                  title: post?.title ?? "",
                }}
              />
            </RenderIfVisible>
          </CommentsContainer>
        )}
      </PageLayout>

      <Script
        strategy="lazyOnload"
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"
      />
    </>
  );
};

export default BlogPostPage;
