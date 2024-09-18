import { Container } from '@mui/system'
import Head from 'next/head'
import About from '../components/Sections/About'
import Experience from '../components/Sections/Experience'
import LandingPage from '../components/Sections/LandingPage'
import Navbar from '../components/Navbar'
import Skills from '../components/Sections/Skills'
import Works from '../components/Sections/Works'
import Contact from '../components/Sections/Contact'
import Footer from '../components/Sections/Footer'
import ScrollProgress from '../components/atoms/ScrollProgress'
import config from '../site.config.json' assert { type: 'json' };

export default function Home() {
  return (
    <div>
      <Head>
        <title>{config.name}</title>
        <meta name="description" content={config.description} />
      </Head>

      <ScrollProgress />
      <Container sx={{pt: 2}}>
        <Navbar />
        <LandingPage />
        <About />
        <Works />
        <Experience />
        <Skills />
        {/* 
        <Contact /> */}
      </Container>
      <Footer />
    </div>
  )
}
