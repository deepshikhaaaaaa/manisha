import '../styles/global.css'
import Script from 'next/script';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Script from 'next/script';

import { ThemeProvider } from "@material-tailwind/react";
import Header from '@/components/header/header';
function MyApp({ Component, pageProps }) {
  
  return <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300&family=Sen:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
    <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></Script>
    <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></Script>

    <ThemeProvider>
      {/* <Header></Header> */}
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp