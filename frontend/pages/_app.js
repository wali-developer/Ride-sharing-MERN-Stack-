import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/main.scss';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/8441000675.js"
        crossorigin="anonymous"
      ></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
