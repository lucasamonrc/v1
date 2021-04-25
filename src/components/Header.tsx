import Link from 'next/link';

import ActiveLink from './ActiveLink';

import common from '../styles/common.module.scss';
import styles from '../styles/components/header.module.scss';

const RESUME_LINK = 'https://docs.google.com/document/d/1slRERISxjiB_xCNT2hPP3sie1gW5b13BW2KH_9V44tA/export?format=pdf';

export default function Header() {
  return (
    <header className={common.container}>
      <div className={styles.header}>
        <Link href="/">
          <a><img src="/logo.svg" alt="Lucas Castro"/></a>
        </Link>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/about">
            <a>About</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/journal">
            <a>Journal</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/projects">
            <a>Projects</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href={RESUME_LINK}>
            <a>Resume</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
