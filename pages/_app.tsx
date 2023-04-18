import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { Roboto } from '@next/font/google';
import type { AppProps } from 'next/app';
import '/public/global.css';

const font = Roboto({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  preload: true,
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          InkVerse - Unleash your imagination with every turn of a page
        </title>
        <meta
          name="description"
          content="Welcome to our online bookstore, your one-stop-shop for books of all kinds."
        />
      </Head>
      <main className={font.className}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </>
  );
}
