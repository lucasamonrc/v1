import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import ProjectRow from '../components/ProjectRow';
import { getPrismicClient } from '../services/prismic';

import common from '../styles/common.module.scss';
import styles from '../styles/pages/projects.module.scss';

interface Project {
  title: string;
  type: string;
  year: string;
  links: {
    github: string;
    live?: string | null;
    figma?: string | null;
    codepen?: string | null;
  };
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Projects | Lucas A. Castro</title>
      </Head>

      <main className={common.content}>
        <section className={styles.projects}>
          <h1>Projects</h1>

          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th>Type</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <ProjectRow
                  key={index} 
                  year={project.year}
                  title={project.title}
                  type={project.type}
                  links={{
                    github: project.links.github,
                    live: project.links.live,
                    figma: project.links.figma,
                    codepen: project.links.codepen,
                  }}
                />
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projects')],
    { 
      pageSize: 100, 
      fetch: [
        'projects.title',
        'projects.links',
        'projects.type',
        'projects.year',
      ], 
    }
  );

  const projects = response.results.map(project => ({
    title: project.data.title,
    type: project.data.type,
    year: project.data.year,
    links: project.data.links[0],
  }));

  return {
    props: {
      projects,
    },
    revalidate: (24 * 3600) // seconds in a day
  }
}
