import Head from 'next/head';
import Link from 'next/link';

import JournalEntry from '../components/JournalEntry';
import Project from '../components/Project';

import common from '../styles/common.module.scss';
import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Lucas A. Castro</title>
      </Head>

      <section className={common.content}>
        <p className={styles.hero}>Hi, I’m Lucas. I help create better experiences in the web by writing quality software.</p>
      </section>

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

          <Link href="/journal"><a>View all entries</a></Link>
        </section>

        <section className={styles.projects}>
          <h1>Projects</h1>

          <Project 
            title='Willingly'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            stack='Next.js, React, Sass, FaunaDB'
          />

          <Project 
            title='Utah County Health Events'
            summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.'
            stack='Nuxt, Vuetify, Node.js, OracleDB'
          />
          
          <Link href="/projects"><a>View all projects</a></Link>
        </section>
      </main>
    </>
  );
}
