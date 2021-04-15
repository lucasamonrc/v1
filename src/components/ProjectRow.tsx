import Link from 'next/link';
import { FiCodepen, FiExternalLink, FiFigma, FiGithub } from 'react-icons/fi';

import styles from '../styles/components/projectRow.module.scss';

interface ProjectRowProps {
  year: string;
  title: string;
  type: string;
  links?: {
    github?: string;
    figma?: string;
    live?: string;
    codepen?: string;
  }
}

export default function ProjectRow({
  year,
  title,
  type,
  links = {
    github: '',
    figma: '',
    live: '',
    codepen: '',
  }
}: ProjectRowProps) {
  return (
    <tr className={styles.project}>
      <td className={styles.year}>2020</td>
      <td className={styles.title}><Link href="/">Open Nudge</Link></td>
      <td>Web App</td>
      <td className={styles.icons}>
        {
          links?.github && 
          <a href={links.github}>
            <FiGithub size={20} />
          </a>
        }

        {
          links?.figma && 
          <a href={links.figma}>
            <FiFigma size={20} />
          </a>
        }

        {
          links?.live && 
          <a href={links.live}>
            <FiExternalLink size={20} />
          </a>
        }

        {
          links?.codepen && 
          <a href={links.codepen}>
            <FiCodepen size={20} />
          </a>
        }
      </td>
    </tr>
  );
}
