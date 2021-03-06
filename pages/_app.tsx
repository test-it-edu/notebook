import '../styles/style.css';
import 'katex/dist/katex.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import type { AppProps } from 'next/app';


const NotebookApp = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />;
}

export default NotebookApp;
