import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from '@prismicio/client';

import JournalEntry from '../components/JournalEntry';
import Project from '../components/Project';
import { getPrismicClient } from '../services/prismic';

import common from '../styles/common.module.scss';
import styles from '../styles/pages/home.module.scss';
import { formatDate } from '../utils/formatDate';



interface Entry {
  uid: string;
  publicationDate: string;
  data: {
    title: string;
    summary: string;
  }
}

interface TechStack {
  frontend: string;
  style: string;
  backend: string;
  other: string;
}

interface PortfolioProject {
  uid: string;
  data: {
    title: string;
    summary: string;
    stack: TechStack[];
  }
}

interface HomeProps {
  entries: Entry[],
  projects: PortfolioProject[],
}

export default function Home({ entries, projects }: HomeProps) {
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

          {entries.map(entry => (
            <JournalEntry
              key={entry.uid}
              slug={entry.uid}
              title={entry.data.title}
              summary={entry.data.summary}
              publicationDate={formatDate(new Date(entry.publicationDate))}
            />
          ))}

          <Link href="/journal"><a>View all entries</a></Link>
        </section>

        <section className={styles.projects}>
          <h1>Projects</h1>

          {projects.map(project => (
            <Project
              key={project.uid}
              slug={project.uid}
              title={project.data.title}
              summary={project.data.summary}
              stack={
                `${project.data.stack[0].frontend}, ${project.data.stack[0].style}, ${project.data.stack[0].backend}, ${project.data.stack[0].other}`
              }
            />
          ))}          
          <Link href="/projects"><a>View all projects</a></Link>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const entriesResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'entries')],
    { pageSize: 4, fetch: ['entries.title', 'entries.summary'] }
  );

  const entries = entriesResponse.results
    .map(entry => ({
      uid: entry.uid,
      publicationDate: entry.first_publication_date,
      data: entry.data,
    }))
    .filter(entry => entry.uid !== 'about');

  const projectsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projects')],
    { pageSize: 4, fetch: ['projects.title', 'projects.summary', 'projects.stack'] }
  )

  const projects = projectsResponse.results.map(project => ({
    uid: project.uid,
    data: project.data,
  }));

  return {
    props: {
      entries,
      projects,
    }
  }
}
