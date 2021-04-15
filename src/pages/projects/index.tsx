import Head from 'next/head';

import ProjectRow from '../../components/ProjectRow';

import common from '../../styles/common.module.scss';
import styles from '../../styles/pages/projects.module.scss';

export default function Home() {
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
              <ProjectRow 
                year="2020"
                title="Open Nudge"
                type="Web app"
                links={{
                  github: '/',
                  figma: '/',
                  live: '/',
                  codepen: '/'
                }}
              />

              <ProjectRow 
                year="2020"
                title="Open Nudge"
                type="Web app"
                links={{
                  github: '/',
                  live: '/',
                }}
              />

              <ProjectRow 
                year="2020"
                title="Open Nudge"
                type="Web app"
                links={{
                  github: '/',
                  live: '/',
                  figma: '/'
                }}
              />

              <ProjectRow 
                year="2020"
                title="Open Nudge"
                type="Web app"
                links={{
                  github: '/',
                }}
              />

              <ProjectRow 
                year="2020"
                title="Open Nudge"
                type="Web app"
                links={{
                  github: '/',
                  figma: '/',
                  live: '/',
                  codepen: '/'
                }}
              />

              <ProjectRow 
                year="2020"
                title="Open Nudge"
                type="Web app"
                links={{
                  github: '/',
                  figma: '/',
                  live: '/',
                  codepen: '/'
                }}
              /> 

              <ProjectRow 
                year="2020"
                title="Open Nudge"
                type="Web app"
                links={{
                  github: '/',
                  figma: '/',
                  live: '/',
                  codepen: '/'
                }}
              /> 

              <ProjectRow 
                year="2020"
                title="Open Nudge"
                type="Web app"
                links={{
                  github: '/',
                  figma: '/',
                  live: '/',
                  codepen: '/'
                }}
              /> 

              <ProjectRow 
                year="2020"
                title="Open Nudge"
                type="Web app"
                links={{
                  github: '/',
                  figma: '/',
                  live: '/',
                  codepen: '/'
                }}
              /> 

              <ProjectRow 
                year="2020"
                title="Open Nudge"
                type="Web app"
                links={{
                  github: '/',
                  figma: '/',
                  live: '/',
                  codepen: '/'
                }}
              /> 

              <ProjectRow 
                year="2020"
                title="Open Nudge"
                type="Web app"
                links={{
                  github: '/',
                  figma: '/',
                  live: '/',
                  codepen: '/'
                }}
              />           
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
