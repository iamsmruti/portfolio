import Heading from '@/components/Heading'
import { useState, useEffect } from "react"

import { glassMorphism, active, notActive } from '../../../assets/Styles'
import { supabase } from '../../../../supabaseConfig'

import { BsLinkedin } from 'react-icons/bs'

const ExperienceSection = () => {
  const [experience, setExperience] = useState([])

  const getData = async () => {
    const { data, error } = await supabase
      .from('experience')
      .select('*')
    setExperience(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='min-h-[70vh] mt-20 pb-20'>
        <Heading title={"EXPERIENCE"}/>

        <div className="flex flex-wrap md:justify-start justify-center mt-5">
          {experience?.map((work, index) => (
            <ExperienceCard work={work} key={index} />
          ))}
        </div>
    </div>
  )
}

export default ExperienceSection

export const ExperienceCard = ({ work }) => {
  return (
    <div className="w-[280px] md:w-[350px] md:mr-3 mb-3 p-3 shadow-md dark:border-[1px] border-gray-800">
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px]">{work.title}</p>

        <div className="flex">
          <a href={work.linkedin} target={'_blank'} rel={'noreferrer'}>
            <BsLinkedin className="text-[26px]"/>
          </a>
        </div>
      </div>

      <p className="text-[14px] opacity-50">{work.company} | {work.start} - {work.end}</p>
      
      <p className="text-[16px] opacity-90 mt-4">{work.description}</p>
      <p className="opacity-90 mt-4"><span style={{ color: '#70d6ff' }}>Tech Used: </span>{work.tech.map((item) => (<>{item},  </>))}</p>
    </div>
  )
}