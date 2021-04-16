import Head from 'next/head';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { formatDate } from '../../utils/formatDate';
import JournalEntry from '../../components/JournalEntry';
import { getPrismicClient } from '../../services/prismic';

import common from '../../styles/common.module.scss';
import styles from '../../styles/pages/about.module.scss';

interface Entry {
  uid: string;
  publicationDate: string;
  data: {
    title: string;
    summary: string;
  }
}

interface JournalProps {
  entries: Entry[],
  nextPage: string;
}

export default function Journal({ entries, nextPage }:JournalProps ) {
  const [journalEntries, setJournalEntries] = useState(entries);
  const [nextPageUrl, setNextPageUrl] = useState(nextPage);

  function handleLoadMore() {
    async function loadNextPage() {
      const response = await fetch(nextPageUrl);
      const data = await response.json();

      const entries = data.results.map(entry => ({
        uid: entry.uid,
        publicationDate: entry.first_publication_date,
        data: entry.data,
      }))
      .filter(entry => entry.uid !== 'about');

      setJournalEntries(oldState => [...oldState, ...entries]);
      setNextPageUrl(data.next_page);
    }

    loadNextPage();
  }

  return (
    <>
      <Head>
        <title>Journal | Lucas A. Castro</title>
      </Head>

      <main className={common.content}>
        <section className={styles.journal}>
          <h1>Journal</h1>

          {journalEntries.map(entry => (
            <JournalEntry
              key={entry.uid}
              slug={`journal/${entry.uid}`}
              title={entry.data.title}
              summary={entry.data.summary}
              publicationDate={formatDate(new Date(entry.publicationDate))}
            />
          ))}
          
          {!!nextPageUrl && <button type="button" onClick={handleLoadMore}>Load more entries</button>}
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const entriesResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'entries')],
    { pageSize: 10, fetch: ['entries.title', 'entries.summary'] }
  );

  const entries = entriesResponse.results
    .map(entry => ({
      uid: entry.uid,
      publicationDate: entry.first_publication_date,
      data: entry.data,
    }))
    .filter(entry => entry.uid !== 'about');

  return {
    props: {
      entries,
      nextPage: entriesResponse.next_page,
    },
    revalidate: (24 * 3600) // seconds in a day
  }
}
