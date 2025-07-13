import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PintFinder</title>
        <meta name="description" content="Search and explore breweries" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
