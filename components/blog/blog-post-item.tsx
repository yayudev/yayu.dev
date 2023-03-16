import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useTranslation } from "next-i18next";

import {
  MEDIA_QUERY_PHONE,
  MEDIA_QUERY_TABLET,
} from "@/constants/media-queries";
import { BlogPost } from "@/types/blog-api";
import {formatDate} from "@/utils/date";

const BlogPostArticleContent = styled.div`
  font-family: "Open sans", "Helvetica Neue", "Segoe UI", "arial",
    "Times New Roman", sans-serif;
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
  padding: 1rem;
  height: 100%;
  align-items: flex-start;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: var(--background-alt);
  }

  ${MEDIA_QUERY_PHONE} {
    flex-direction: column;
    place-items: center;
  }
`;

const StyledLink = styled(Link)`
  display: block;
`;

const StyledImage = styled(Image)`
  ${MEDIA_QUERY_PHONE} {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
`;

const ArticleContainer = styled.article`
  &:after {
    display: block;
    content: "";
    margin: 0 auto;
    background: var(--item-background);
    height: 2px;
    width: 75%;

    ${MEDIA_QUERY_TABLET} {
      width: 80%;
    }

    ${MEDIA_QUERY_PHONE} {
      width: 90%;
    }
  }

  &:first-child {
    margin-top: -2rem;
  }

  &:last-child:after {
    display: none;
  }
`;

const BlogPostInfo = styled.div`
  box-sizing: border-box;
  padding-left: 1rem;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  line-height: 1em;
  word-wrap: anywhere;
`;

const DateText = styled.span`
  font-size: 1.1rem;
  color: var(--text-color-secondary);
`;

const Excerpt = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  word-wrap: anywhere;
`;

interface BlogPostItemProps {
  post: BlogPost;
}

export function BlogPostItem({ post }: BlogPostItemProps) {
  const { t } = useTranslation();
  const coverImage: string | undefined = (post.coverImage as any)?.fields?.file
    ?.url;
  const postImage = coverImage
    ? `https:${coverImage}`
    : "https://via.placeholder.com/150x200.jpg";
  const date = formatDate(new Date(post.date ?? ""))

  return (
    <ArticleContainer>
      <StyledLink href={`/blog/${post.slug}`}>
        <BlogPostArticleContent>
          <StyledImage
            src={postImage}
            width={150}
            height={200}
            alt={t("blog:image-alt-template", { title: post.title })}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />

          <BlogPostInfo>
            <Title>{post.title}</Title>
            <DateText>
              {t("blog:image-posted-on", { date })}
            </DateText>
            <Excerpt>{post.excerpt}</Excerpt>
          </BlogPostInfo>
        </BlogPostArticleContent>
      </StyledLink>
    </ArticleContainer>
  );
}
