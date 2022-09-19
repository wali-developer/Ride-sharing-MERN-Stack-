import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/8441000675.js"
        crossorigin="anonymous"
      ></Script>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}

export default MyApp
