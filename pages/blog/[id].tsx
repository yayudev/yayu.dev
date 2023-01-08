import { PageLayout } from "layouts/page";
import { GetServerSideProps } from "next";
import { BlogApiService } from "services/blog-api";
import styled from "styled-components";
interface BlodPostProps {
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
  }

  blockquote {
    font-size: 1.1rem;
    font-weight: 400;
    width: calc(100% - 5rem);
    margin: 0;
    margin: 0 auto;
    font-weight: 400;
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const postId = context.query.id as string;

  const pageUrl = BlogApiService.getIndividualPostUrl(postId);
  const data = await BlogApiService.fetchIndividualPost(postId);

  return {
    props: {
      postId,
      fallback: {
        [pageUrl]: data,
      },
    },
  };
};

const BlogPostPage = ({ postId }: BlodPostProps) => {
  const { post, isError, isLoading } = BlogApiService.useIndividualPost(postId);

  return (
    <>
      <PageLayout
        title={post?.title || "loading..."}
        isAestheticTitle={false}
        isLoading={isLoading}
        hasError={isError}
      >
        <PostContainer>
          {post && <div dangerouslySetInnerHTML={{ __html: post?.html }} />}
        </PostContainer>
      </PageLayout>
    </>
  );
};

export default BlogPostPage;
