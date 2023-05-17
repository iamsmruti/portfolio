import '@/styles/globals.css'
import { useThemeStore } from '@/stores/themeStore';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Loader from '@/components/Loader';

export default function App({ Component, pageProps }) {
  const themeStore = useThemeStore()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if(!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches){
        localStorage.setItem('theme', 'dark')
      } else if(!localStorage.getItem('theme') && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('theme', 'light')
      }
    }, 100)
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, [])
  
  useEffect(() => {
    setTimeout(() => {
      if(localStorage.getItem('theme') === 'dark'){
        themeStore.setTheme(localStorage.getItem('theme'))
        document?.documentElement.classList.add('dark')
      } else {
        document?.documentElement.classList.remove('dark')
      }
  
      console.log(themeStore.theme) 
    }, 100)
  }, [themeStore.theme])

  return (
  <>
    {!loading ? <Layout><Component {...pageProps} /></Layout> : <Loader />}
  </> 
  )
}
