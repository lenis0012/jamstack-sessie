import Head from 'next/head'
import '../index.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8"/>
      <link rel="shortcut icon" href="/favicon.ico"/>
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans|Lobster"
        rel="stylesheet"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000"/>
      <link rel="manifest" href="/manifest.json"/>
      <title>Snap Shot</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
