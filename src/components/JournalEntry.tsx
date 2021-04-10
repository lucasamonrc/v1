import Link from 'next/link';
import { FiCalendar, FiClock } from 'react-icons/fi';

import styles from '../styles/components/journalEntry.module.scss';

interface JournalEntryProps {
  slug?: string;
  title: string;
  summary: string;
  publicationDate: string;
  readingTime: string;
}

export default function JournalEntry({ title, summary, publicationDate, readingTime }: JournalEntryProps) {
  return (
    <article className={styles.journal}>
      <Link href="/"><a><h2>{title}</h2></a></Link>
      <summary>{summary}</summary>
      <div>
        <time>
          <FiCalendar size={16}/>
          {publicationDate}
        </time>
        <time>
          <FiClock size={16}/>
          {readingTime} min
        </time>
      </div>
    </article>
  );
}