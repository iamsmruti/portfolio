import Heading from '@/components/Heading'
import { useState, useEffect } from "react"

import { glassMorphism, active, notActive } from '../../../assets/Styles'
import { supabase } from '../../../../supabaseConfig'

import { BsLinkedin } from 'react-icons/bs'

const ExperienceSection = () => {
  const experience = [
    {
      id: "1",
      created_at: "2022-10-20 16:24:25.127825+00",
      start: "July 2022",
      end: "Sept 2022",
      title: "React Developer",
      description: "Worked on developing the Product and managed the Project Structure",
      company: "Rariko",
      tech: ["React","Redux","Material UI","JavaScript","REST API","Web3"],
      linkedin: "https://www.linkedin.com/company/rariko/"
    },
    {
      id: "2",
      created_at: "2022-10-20 16:27:24.474667+00",
      start: "Sept 2022",
      end: "Oct 2022",
      title: "JavaScript Developer",
      description: "One of the Early Developers to work on the the project from scratch.",
      company: "Perception AI",
      tech: ["React","Material UI","Redux","Firebase","JavaScript","REST API"],
      linkedin: "https://www.linkedin.com/company/perceptionaiapp/"
    },
    {
      id: "3",
      created_at: "2022-10-20 16:30:12.142915+00",
      start: "Nov 2022",
      end: "May 2022",
      title: "HTML Developer",
      description: "Developed pixel perfect UI out of Adobe XD designs. ",
      company: "Matterize",
      tech: ["HTML","CSS","SASS","Firebase","JavaScript","EJS","NodeJS"],
      linkedin: "https://www.linkedin.com/company/matterize/mycompany/"
    },
    {
      id: "5",
      created_at: "2023-05-19 12:24:49.172712+00",
      start: "May 2023",
      end: "June 2023",
      title: "Full Stack Developer",
      description: "Working as a Full Stack Developer to renovate the company's website and build the site with the latest web technologies.",
      company: "eLitmus Evaluation",
      tech: ["React","Node JS","JavaScript","Tailwind CSS","Express","MongoDB"],
      linkedin: "https://www.linkedin.com/company/elitmus-evaluation-pvt-ltd/mycompany/verification/"
    },
    {
      id: "4",
      created_at: "2023-05-19 12:21:20.51388+00",
      start: "Feb 2023",
      end: "Mar 2023",
      title: "Next JS Developer",
      description: "Developed a clean-looking SaaS Landing page for the startup",
      company: "Bottom Street",
      tech: ["Next JS","Tailwind CSS","Google Analytics","SEO"],
      linkedin: "https://www.linkedin.com/company/paprclip/"
    }
  ]

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