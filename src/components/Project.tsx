import Link from 'next/link';
import { FiTool } from 'react-icons/fi';

import styles from '../styles/components/project.module.scss';

interface ProjectProps {
  slug?: string;
  title: string;
  summary: string;
  stack: string;
}

export default function Project({ title, summary, stack }: ProjectProps) {
  return (
    <article className={styles.project}>
      <Link href="/"><a><h2>{title}</h2></a></Link>
      <summary>{summary}</summary>
      <span>
        <FiTool size={16}/>
        {stack}
      </span>
    </article>
  );
} 