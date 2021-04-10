import Link from 'next/link';

import common from '../styles/common.module.scss';
import styles from '../styles/components/header.module.scss';

export default function Header() {
  return (
    <header className={common.container}>
      <Link href="/">
        <a><img src="/logo.svg" alt="Lucas Castro"/></a>
      </Link>
    </header>
  );
}
