import '../styles/globals.css';
import type { AppProps } from 'next/app';

const NotebookApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

export default NotebookApp;
