import AboutSection from "@/components/Sections/Home/AboutSection"
import ContactsSection from "@/components/Sections/Home/ContactsSection"
import ExperienceSection from "@/components/Sections/Home/ExperienceSection"
import HeroSection from '@/components/Sections/Home/HeroSection'
import SkillsSection from "@/components/Sections/Home/SkillsSection"
import Visitors from "@/components/Sections/Home/Visitors"
import WorkSection from '@/components/Sections/Home/WorkSection'
import Head from "next/head"
import React from 'react'
import { useState, useEffect } from "react"
import { supabase } from '../../supabaseConfig'

const Home = () => {
  const [previousData, setData] = useState([])
  const [logs, setLogs] = useState([])

  const getData = async () => {
    const { data, error } = await supabase
      .from('about')
      .select('*')
    setData(data)
  }

  const updateData = async () => {
    const { data, error } = await supabase
      .from('about')
      .update({ visitors : previousData[0]?.visitors + 1})
      .eq('id', 1)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if(previousData !== [])
        updateData()
    }, 2000)
  }, [previousData])

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
      <Visitors visitors={previousData[0]?.visitors} />
    </div>
  )
}

export default Home