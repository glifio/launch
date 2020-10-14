import '../styles/index.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Glif</title>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/static/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/static/favicon-32x32.png'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
