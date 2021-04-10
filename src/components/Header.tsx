import Link from 'next/link';

import ActiveLink from './ActiveLink';

import common from '../styles/common.module.scss';
import styles from '../styles/components/header.module.scss';

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
          <ActiveLink activeClassName={styles.active} href="/projects">
            <a>Projects</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/journal">
            <a>Journal</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="https://rb.gy/evmrcf">
            <a>Resume</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
