import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/global.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="pageContent">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
