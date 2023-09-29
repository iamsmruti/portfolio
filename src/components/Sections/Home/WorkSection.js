import Heading from '@/components/Heading'
import { useState } from "react"

import { active, notActive } from '../../../assets/Styles'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

const WorkSection = () => {
  const [value, setValue] = useState(0)
  const works = [
    {
      id: "2",
      created_at: "2022-10-20 15:02:39.595614+00",
      title: "recode-pde",
      description: "This CLI will erase the nightmares of using the Processing IDE to run your sketches every time after making changes.",
      github: "https://github.com/iamsmruti/recode-pde",
      url: "https://www.npmjs.com/package/recode-pde",
      category: "general",
      tech: ["NodeJS","Chokidar"]
    },
    {
      id: "4",
      created_at: "2022-11-08 11:30:16.287884+00",
      title: "Video TV",
      description: "A Full Stack Video Sharing Platform. Easy to upload videos and share the url with friends.",
      github: "https://github.com/iamsmruti/video-tv",
      url: "https://video-tv.vercel.app/",
      category: "web",
      tech: ["React","Material UI","Cloudinary","Express","Mongoose"]
    },
    {
      id: "5",
      created_at: "2023-01-21 05:26:18.74987+00",
      title: "async tic-tac-toe ",
      description: "This is a real-time multiplayer tic-tac-toe game. You can invite your friends to play together online.",
      github: "https://github.com/iamsmruti/tic-tac-toe",
      url: "https://crossedcircle.vercel.app/",
      category: "web",
      tech: ["Reactjs","Material UI","MongoDB","Nodejs","Expressjs","Redux Toolkit"]
    },
    {
      id: "1",
      created_at: "2022-10-20 14:55:52+00",
      title: "Seeker's Saga",
      description: "A Full Stack Treasure Hunt Website, featured with interactive maps and puzzles to test your softskills.",
      github: "https://github.com/iamsmruti/seekers_saga",
      url: "https://seekers-saga.vercel.app/",
      category: "web",
      tech: ["React","NodeJS","MongoDB","Express","Material UI","Tailwind CSS","JWT"]
    },
    {
      id: "3",
      created_at: "2022-10-20 16:20:25.866641+00",
      title: "Portfolio",
      description: "My Personal Portfolio. Designed and Developed by myself. It is also featured with Blogs.",
      github: "https://github.com/iamsmruti/portfolio",
      url: "https://smruti.vercel.app/",
      category: "web",
      tech: ["Next","Supabase","Material UI","Tailwind CSS","Nodejs","Mongo DB"]
    },
    {
      id: "6",
      created_at: "2023-05-19 12:17:42.12918+00",
      title: "Bottom Street",
      description: "A Beautiful Sass Landing Page, featured with responsive layouts and slick carousels.",
      github: "https://github.com/iamsmruti/bottomstreet",
      url: "https://bottomstreet.vercel.app/",
      category: "web",
      tech: ["Next JS","Tailwind CSS","Google Analytics","SEO"]
    }
  ]

  return (
    <div className='min-h-[90vh]'>
        <Heading title={"WORK"}/>
        
        <div className="flex mb-2 mt-5 border-b-[1px] dark:border-gray-800">
          {value === 0 ? <div onClick={() => setValue(0)} className="text-white" style={active}><p>All</p></div> : <div onClick={() => setValue(0)} style={notActive}><p>All</p></div>}
          {value === 1 ? <div onClick={() => setValue(1)} className="text-white" style={active}><p>Web</p></div> : <div onClick={() => setValue(1)} style={notActive}><p>Web</p></div>}
          {value === 2 ? <dov onClick={() => setValue(2)} className="text-white" style={active}><p>General</p></dov> : <div onClick={() => setValue(2)} style={notActive}><p>General</p></div>}
        </div>

        <div className="flex flex-wrap md:justify-start justify-center">
          {works?.filter((item) => {
            if(value === 1) return item.category === 'web'
            else if (value === 2) return item.category === 'general'
            else return item
          }).map((work, index) => (
            <WorkCard work={work} key={index} />
          ))}
        </div>
    </div>
  )
}

export default WorkSection     

export const WorkCard = ({ work }) => {
  return (
    <div className="w-[280px] md:w-[350px] md:mr-3 mb-3 p-3 shadow-md dark:border-[1px] border-gray-800">
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px]">{work.title}</p>

        <div className="flex">
          <a href={work.github} target={'_blank'} rel={'noreferrer'}>
            <BsGithub className="text-[26px] mr-4"/>
          </a>
          <a href={work.url} target={'_blank'} rel={'noreferrer'}>
            <BiLinkExternal className="text-[26px] mr-4"/>
          </a>
        </div>
      </div>

      <p className="text-[16px] opacity-90 mt-4">{work.description}</p>

      <p className="opacity-90 mt-6"><span style={{ color: '#70d6ff' }}>Tech Used: </span>{work.tech.map((item) => (<>{item},  </>))}</p>
    </div>
  )
}