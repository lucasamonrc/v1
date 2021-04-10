import Head from 'next/head';
import Link from 'next/link';
import { FiCalendar, FiClock, FiTool } from 'react-icons/fi';

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

          <article>
            <Link href="/"><a><h2>How to use React Hooks</h2></a></Link>
            <summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.</summary>
            <div>
              <time>
                <FiCalendar size={16}/>
                Apr 9, 2021
              </time>
              <time>
                <FiClock size={16}/>
                4 min
              </time>
            </div>
          </article>

          <article>
            <Link href="/"><a><h2>How to use React Hooks</h2></a></Link>
            <summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.</summary>
            <div>
              <time>
                <FiCalendar size={16}/>
                Apr 9, 2021
              </time>
              <time>
                <FiClock size={16}/>
                4 min
              </time>
            </div>
          </article>

          <Link href="/"><a>View all entries</a></Link>
        </section>

        <section className={styles.projects}>
          <h1>Projects</h1>

          <article>
            <Link href="/"><a><h2>How to use React Hooks</h2></a></Link>
            <summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.</summary>
            <span>
              <FiTool size={16}/>
              React, Sass, Node.js, MongoDB
            </span>
          </article>

          <article>
            <Link href="/"><a><h2>How to use React Hooks</h2></a></Link>
            <summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.</summary>
            <span>
              <FiTool size={16}/>
              React, Sass, Node.js, MongoDB
            </span>
          </article>

          <Link href="/"><a>View all projects</a></Link>
        </section>
      </main>
    </>
  );
}
