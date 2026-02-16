import prisma from "@/lib/prisma";
import Head from "next/head";
import EventPage from "@/components/eventPage/EventPage";

export default function Event({ eventData }) {
  return (
    <>
      <Head>
        <title>{eventData.title}</title>
        <meta name="description" content={eventData.shortDescription} />
        <meta property="og:title" content={eventData.title} />
        <meta property="og:description" content={eventData.shortDescription} />
        <meta property="og:image" content={eventData.thumbnail} />
      </Head>
      <EventPage eventData={eventData} />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  try {
    const event = await prisma.event.findUnique({
      include: {
        speakers: true,
        tags: true
      },
      where: {
        slug: slug
      }
    });
    if (event) {
      event.startDate = String(event.startDate);
      event.endDate = String(event.endDate);
      return {
        props: {
          eventData: event
        },
        revalidate: 20
      };
    }
  } catch (err) {
    console.error("[events/[slug]] getStaticProps:", err?.message || err);
  }
  return {
    notFound: true
  };
};

export async function getStaticPaths() {
  try {
    const events = await prisma.event.findMany({
      select: {
        slug: true
      }
    });
    const eventSlugs = (events || []).filter((event) => event.slug != null);
    const paths = eventSlugs.map((event) => ({
      params: { slug: event.slug }
    }));
    return {
      paths,
      fallback: "blocking"
    };
  } catch (err) {
    console.error("[events/[slug]] getStaticPaths: can't reach database:", err?.message || err);
    return {
      paths: [],
      fallback: "blocking"
    };
  }
}
