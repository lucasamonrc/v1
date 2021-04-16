import { FiTool } from 'react-icons/fi';

import styles from '../styles/components/project.module.scss';

interface ProjectProps {
  link: string;
  title: string;
  summary: string;
  stack: string;
}

export default function Project({ title, summary, stack, link }: ProjectProps) {
  return (
    <article className={styles.project}>
      <a href={link}><h2>{title}</h2></a>
      <summary>{summary}</summary>
      <span>
        <FiTool size={16}/>
        {stack}
      </span>
    </article>
  );
}
