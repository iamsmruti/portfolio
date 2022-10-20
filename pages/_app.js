import '../styles/globals.css';
import { useState, useEffect } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';

import Loading from '../components/atoms/Loading';

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

  useEffect(() =>{
    setTimeout(() => setLoading(false), 3000);
  })
  return (
    <ThemeProvider theme={theme}>
        {!loading ? <Component {...pageProps} /> : <Loading />}
    </ThemeProvider>
  );
}

export default MyApp;
