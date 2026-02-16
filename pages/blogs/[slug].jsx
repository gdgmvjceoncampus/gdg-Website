import Head from "next/head";
import prisma from "@/lib/prisma";
import BlogArticlePage from "@/components/blog/BlogArticlePage";

const BlogPage = ({ articleData }) => {
  if (!articleData) return null;
  return (
    <>
      <Head>
        <title>{articleData.title}</title>
        <meta name="description" content={articleData.shortDescription} />
        <meta property="og:title" content={articleData.title} />
        <meta
          property="og:description"
          content={articleData.shortDescription}
        />
        <meta property="og:image" content={articleData.thumbnail} />
      </Head>
      <BlogArticlePage article={articleData} />
    </>
  );
};

function serializeBlog(blog) {
  if (!blog) return null;
  return {
    ...blog,
    date: blog.date instanceof Date ? blog.date.toISOString() : String(blog.date),
    author: blog.author ? { ...blog.author } : null,
    tags: Array.isArray(blog.tags) ? blog.tags.map((t) => ({ ...t })) : []
  };
}

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params;
  try {
    const blog = await prisma.blog.findUnique({
      include: {
        author: true,
        tags: true
      },
      where: {
        slug: slug
      }
    });
    if (blog) {
      const articleData = serializeBlog(blog);
      return {
        props: {
          articleData
        }
      };
    }
  } catch (err) {
    console.error("[blogs/[slug]] getServerSideProps:", err?.message || err);
  }
  return {
    notFound: true
  };
};

export default BlogPage;
