import '../styles/globals.css'
<<<<<<< HEAD
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'


=======
import { AppPropsWithLayout } from '../model/layout'
import Layout from '../components/Layout';
import { AppProps } from 'next/app';
import '../styles/style.css'
>>>>>>> 3fb43f09800e469513db02df6710042fb28102db
function MyApp({ Component, pageProps }: AppProps) {

 const LayoutWrapper = Component.Layout ?? Layout;
  
  return (<LayoutWrapper><Component {...pageProps} /></LayoutWrapper>)
}

export default MyApp
