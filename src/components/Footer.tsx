import common from '../styles/common.module.scss';

export default function Footer() {
  return (
    <footer>
      <div className={common.container}>
        <p>Lucas A. Castro</p>
        <time>April 9th, 2021</time>
      </div>
    </footer>
  );
}
