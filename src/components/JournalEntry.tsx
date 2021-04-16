import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';

import styles from '../styles/components/journalEntry.module.scss';

interface JournalEntryProps {
  slug?: string;
  title: string;
  summary: string;
  publicationDate: string;
}

export default function JournalEntry({ title, summary, publicationDate, slug = '' }: JournalEntryProps) {
  return (
    <article className={styles.journal}>
      <Link href={slug}><a><h2>{title}</h2></a></Link>
      <summary>{summary}</summary>
      <div>
        <time>
          <FiCalendar size={16}/>
          {publicationDate}
        </time>
      </div>
    </article>
  );
}
