import common from '../styles/common.module.scss';
import { formatDate } from '../utils/formatDate';

export default function Footer() {
  return (
    <footer>
      <div className={common.container}>
        <p>Lucas A. Castro</p>
        <time>{formatDate(new Date())}</time>
      </div>
    </footer>
  );
}
