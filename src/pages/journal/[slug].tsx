import Head from "next/head";
import { RichText } from 'prismic-dom';
import { useRouter } from "next/router"
import { FiCalendar } from "react-icons/fi";
import { GetStaticPaths, GetStaticProps } from "next"

import { formatDate } from "../../utils/formatDate";
import { getPrismicClient } from "../../services/prismic"

import common from '../../styles/common.module.scss';
import styles from '../../styles/pages/entry.module.scss';

interface Entry {
  uid: string;
  publicationDate: string | null;
  data: {
    title: string;
    banner: string;
    content: {
      heading: string;
      body: { text: string }[];
    }[];
  };
}

interface EntryProps {
  entry: Entry;
}

export default function Entry({ entry }: EntryProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1 className="fallback">Loading post...</h1>
  }

  return (
    <>
      <Head>
        <title>{entry.data.title} | Lucas A. Castro</title>
      </Head>

      <img className={styles.banner} src={entry.data.banner} alt=""/>

      <main className={common.content}>
        <article className={styles.entry}>
          <h1>{entry.data.title}</h1>
          <time>
            <FiCalendar size={16} />
            {formatDate(new Date(entry.publicationDate))}
          </time>

          {entry.data.content.map((content, index) => (
            <section key={index}>
              <h2>{content.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: RichText.asHtml(content.body) }} />
            </section>
          ))}
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {  
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('entries', String(slug), {});

  const content = response.data.content.map(content => ({
    heading: content.heading,
    body: content.body,
  }));

  const entry = {
    publicationDate: response.first_publication_date,
    data: {
      title: response.data.title,
      banner: response.data.banner.url,
      content,
    }
  }

  return {
    props: {
      entry,
    },
  }
}
