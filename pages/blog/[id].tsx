import { NextRouter, useRouter } from "next/router";

const BlogPostPage = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default BlogPostPage;
