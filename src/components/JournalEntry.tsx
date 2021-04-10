import Link from 'next/link';
import { FiCalendar, FiClock } from 'react-icons/fi';

import styles from '../styles/components/journalEntry.module.scss';

export default function JournalEntry() {
  return (
    <article className={styles.journal}>
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
  );
}