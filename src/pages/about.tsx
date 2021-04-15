import Head from 'next/head';

import JournalEntry from '../components/JournalEntry';

import common from '../styles/common.module.scss';
import styles from '../styles/pages/about.module.scss';

export default function About() {
  return (
    <>
      <Head>
        <title>Journal | Lucas A. Castro</title>
      </Head>

      <main className={common.content}>
        <section className={styles.journal}>
          <h1>Journal</h1>

          <JournalEntry 
            title='How to use React Hooks'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            publicationDate='Apr 9, 2021'
            readingTime='4'
          />
          
          <JournalEntry 
            title='How to use React Hooks'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            publicationDate='Apr 9, 2021'
            readingTime='4'
          />
          
          <JournalEntry 
            title='How to use React Hooks'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            publicationDate='Apr 9, 2021'
            readingTime='4'
          />

          <JournalEntry 
            title='How to use React Hooks'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            publicationDate='Apr 9, 2021'
            readingTime='4'
          />
          
          <JournalEntry 
            title='How to use React Hooks'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            publicationDate='Apr 9, 2021'
            readingTime='4'
          />

          <JournalEntry 
            title='How to use React Hooks'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            publicationDate='Apr 9, 2021'
            readingTime='4'
          />
          
          <JournalEntry 
            title='How to use React Hooks'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            publicationDate='Apr 9, 2021'
            readingTime='4'
          />
          
          <JournalEntry 
            title='How to use React Hooks'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            publicationDate='Apr 9, 2021'
            readingTime='4'
          />
          
          <JournalEntry 
            title='How to use React Hooks'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            publicationDate='Apr 9, 2021'
            readingTime='4'
          />
          
          <JournalEntry 
            title='How to use React Hooks'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            publicationDate='Apr 9, 2021'
            readingTime='4'
          />

          <button type="button">Load more entries</button>
        </section>
      </main>
    </>
  );
}
