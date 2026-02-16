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

export const getStaticProps = async (ctx) => {
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
        },
        revalidate: 20
      };
    }
  } catch (err) {
    console.error("[blogs/[slug]] getStaticProps:", err?.message || err);
  }
  return {
    notFound: true
  };
};

export async function getStaticPaths() {
  try {
    const blogs = await prisma.blog.findMany({
      select: {
        slug: true
      }
    });
    const blogSlugs = (blogs || []).filter((blog) => blog.slug != null);
    const paths = blogSlugs.map((blog) => ({
      params: { slug: blog.slug }
    }));
    return {
      paths,
      fallback: "blocking"
    };
  } catch (err) {
    console.error("[blogs/[slug]] getStaticPaths: can't reach database:", err?.message || err);
    return {
      paths: [],
      fallback: "blocking"
    };
  }
}

export default BlogPage;
