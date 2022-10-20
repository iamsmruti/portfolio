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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Smruti Ranjan Badatya" />
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/portfolio-208ef.appspot.com/o/S.png?alt=media&token=a83e253c-5c7e-4916-9bda-56ca21f7270f" />
      </Head>

      <ScrollProgress />
      <Container sx={{pt: 2}}>
        <Navbar />
        <LandingPage />
        <About />
        <Works />
        <Experience />
        <Skills />
        <Contact />
      </Container>
      <Footer />
    </div>
  )
}
