import AboutSection from "@/components/Sections/Home/AboutSection"
import ContactsSection from "@/components/Sections/Home/ContactsSection"
import ExperienceSection from "@/components/Sections/Home/ExperienceSection"
import HeroSection from '@/components/Sections/Home/HeroSection'
import SkillsSection from "@/components/Sections/Home/SkillsSection"
import WorkSection from '@/components/Sections/Home/WorkSection'
import Head from "next/head"
import React from 'react'
import { useEffect } from "react"
import { Mixpanel } from "../../mixpanel"

const Home = () => {
  useEffect(() => {
    Mixpanel.track('page', 'Portfolio')
  }, [])

  return (
    <div className="relative">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Smruti Ranjan Badatya" />
        <link rel="icon" href="https://www.seekpng.com/png/small/400-4003353_cocktail-clip-art-orange-smoothie-clip-art.png" />
      </Head>

      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactsSection />
    </div>
  )
}

export default Home
