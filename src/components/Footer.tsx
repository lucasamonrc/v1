import common from '../styles/common.module.scss';

export default function Footer() {
  return (
    <footer>
      <div className={common.container}>
        <p>Lucas A. Castro</p>
        <time>{new Date().getFullYear()}</time>
      </div>
    </footer>
  );
}
