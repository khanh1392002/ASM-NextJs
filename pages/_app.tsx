import '../styles/globals.css'
import { AppPropsWithLayout } from '../model/layout'
import Layout from '../components/Layout';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {

 const LayoutWrapper = Component.Layout ?? Layout;
  
  return (<LayoutWrapper><Component {...pageProps} /></LayoutWrapper>)
}

export default MyApp
