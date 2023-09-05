import Layout from '../components/layout/layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <layout>
       <Component {...pageProps} />
    </layout>

  );
}

export default MyApp
