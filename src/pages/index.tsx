import Head from 'next/head';
import Link from 'next/link';
import { FiCalendar, FiClock, FiTool } from 'react-icons/fi';

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

          <JournalEntry />
          <JournalEntry />

          <Link href="/"><a>View all entries</a></Link>
        </section>

        <section className={styles.projects}>
          <h1>Projects</h1>

          <Project />
          <Project />
          
          <Link href="/"><a>View all projects</a></Link>
        </section>
      </main>
    </>
  );
}
