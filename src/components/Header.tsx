import Link from 'next/link';

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
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/journal">
            <a>Journal</a>
          </Link>
          <Link href="https://rb.gy/evmrcf">
            <a>Resume</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
