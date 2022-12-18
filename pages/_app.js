import '../styles/globals.css';
import { useState, useEffect } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';

import Loading from '../components/atoms/Loading';
import Script from 'next/script';

import { useRouter } from 'next/router';
import * as gtag from "../gtag";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ADD8E6',
    },
    secondary: red,
    mode: 'dark'
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 915,
      lg: 1200,
      xl: 1536,
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        id="ga-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/TypewriterJS/1.0.0/typewriter.js'/>
      <Script
        id='ga-init'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <ThemeProvider theme={theme}>
        {!loading ? <Component {...pageProps} /> : <Loading />}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
