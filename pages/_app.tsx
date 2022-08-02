import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }: AppProps) {
  const LayoutWrapper = Component.Layout ?? Layout;
  
  return (<LayoutWrapper><Component {...pageProps} /></LayoutWrapper>)
  // return <Component {...pageProps} />

}

export default MyApp
