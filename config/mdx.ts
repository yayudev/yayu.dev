import nextMDX from "@next/mdx";

// import remarkAutolinkHeadings from "remark-autolink-headings";
// import remarkSlug from "remark-slug";

export const mdxOptions = {
  remarkPlugins: [
    //remarkSlug,
    // remarkAutolinkHeadings
  ],
};

export const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: mdxOptions,
});
