import Link from 'next/link';
import { FiTool } from 'react-icons/fi';

import styles from '../styles/components/project.module.scss';

export default function Project() {
  return (
    <article className={styles.project}>
      <Link href="/"><a><h2>How to use React Hooks</h2></a></Link>
      <summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed sapien interdum sed.</summary>
      <span>
        <FiTool size={16}/>
        React, Sass, Node.js, MongoDB
      </span>
    </article>
  );
} 