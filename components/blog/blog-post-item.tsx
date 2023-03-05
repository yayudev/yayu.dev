import { BlogPost } from "@/types/blog-api";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useTranslation } from "next-i18next";

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
`;

const ArticleContainer = styled.article`
  &:after {
    display: block;
    content: "";
    margin: 0 auto;
    background: var(--item-background);
    height: 2px;
    width: 75%;
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
`;

const DateText = styled.span`
  font-size: 1.1rem;
  color: var(--text-color-secondary);
`;

const Excerpt = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

interface BlogPostItemProps {
  post: BlogPost;
}

export function BlogPostItem({ post }: BlogPostItemProps) {
  const { t } = useTranslation("blog");
  const postImage = post.image ?? "https://via.placeholder.com/150x200.jpg";

  return (
    <ArticleContainer>
      <Link href={`/blog/${post.url}`} passHref>
        <BlogPostArticleContent>
          <Image
            src={postImage}
            width={150}
            height={200}
            alt={t("image-alt-template", { title: post.title })}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />

          <BlogPostInfo>
            <Title>{post.title}</Title>
            <DateText>{t("image-posted-on", { date: post.date })}</DateText>
            <Excerpt>{post.excerpt}</Excerpt>
          </BlogPostInfo>
        </BlogPostArticleContent>
      </Link>
    </ArticleContainer>
  );
}
