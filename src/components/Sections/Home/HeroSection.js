import HelloText from '@/components/HelloText'
import Type from '@/components/Typewriter'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='md:h-[90vh] h-[80vh] w-[100%] flex relative justify-center'>
      <div className=''>
        <HelloText />
      </div> 
      <div className='md:mt-[450px] mt-[400px] flex items-center flex-col'>
        <p className='md:text-[32px] text-[24px] uppercase font-thin'>I am <span className='font-normal'>Smruti Ranjan</span></p>
        <Type />

        <Link target='_blank' href={"/Smruti Ranjan Badatya.pdf"}>
          <button className='px-4 py-2 dark:border-slate-800 border-slate-400 border-[1px] mt-5'>My Resume</button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection