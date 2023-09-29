import Heading from '@/components/Heading'
import { useState } from "react"

import { glassMorphism, active, notActive } from '../../../assets/Styles'

const SkillsSection = () => {
  const [value, setValue] = useState(0)

  const skills = [
    {
      id: "14",
      created_at: "2022-12-18 15:10:10.474599+00",
      title: "Database Management System",
      description: "Have a Good grasp of designing a database",
      type: "cs"
    },
    {
      id: "15",
      created_at: "2022-12-18 15:10:31.33516+00",
      title: "Computer Network",
      description: "Have a Good grasp of designing a Network",
      type: "cs"
    },
    {
      id: "17",
      created_at: "2022-12-18 15:12:54.826368+00",
      title: "Git & GitHub",
      description: "Used git for pretty much every project.",
      type: "pr"
    },
    {
      id: "18",
      created_at: "2022-12-18 15:13:44.586457+00",
      title: "C/C++",
      description: "My go-to language for solving problems.",
      type: "pr"
    },
    {
      id: "19",
      created_at: "2022-12-18 15:17:44.010038+00",
      title: "CSS Frameworks",
      description: "Material UI, Tailwind CSS are my favourites",
      type: "pr"
    },
    {
      id: "22",
      created_at: "2022-12-18 15:20:37.606977+00",
      title: "Databases",
      description: "MongoDB, Postgress, Supabase ",
      type: "pr"
    },
    {
      id: "12",
      created_at: "2022-12-18 15:08:46.965199+00",
      title: "Data Structures",
      description: "Solved Around 190+ questions on Leetcode",
      type: "cs"
    },
    {
      id: "13",
      created_at: "2022-12-18 15:09:11.169729+00",
      title: "Operating System",
      description: "Made a simple Hello World OS using x86 ",
      type: "cs"
    },
    {
      id: "16",
      created_at: "2022-12-18 15:11:42.681692+00",
      title: "React & Next",
      description: "Used React, Next to build a lot of Full Stack Applications.",
      type: "pr"
    },
    {
      id: "20",
      created_at: "2022-12-18 15:18:51.040021+00",
      title: "Dev Tools",
      description: "Apollo, Postman, Adobe XD, Figma are my helpers",
      type: "pr"
    },
    {
      id: "21",
      created_at: "2022-12-18 15:19:35.225532+00",
      title: "Flutter",
      description: "Built a Tic-Tac-Toe app as a side project.",
      type: "pr"
    },
    {
      id: "23",
      created_at: "2023-05-19 12:28:47.773797+00",
      title: "Backend",
      description: "I also make GraphQL - Express API to support my front-ends",
      type: "pr"
    }
  ]

  return (
    <div className='min-h-[100vh] mb-20'>
      <Heading title={"SKILLS"}/>
      
      <div className="flex mb-2 mt-6 border-b-[1px] dark:border-gray-800">
        {value === 0 ? <div onClick={() => setValue(0)} className="text-white" style={active}><p>All</p></div> : <div onClick={() => setValue(0)} style={notActive}><p>All</p></div>}
        {value === 1 ? <div onClick={() => setValue(1)} className="text-white" style={active}><p>Programming</p></div> : <div onClick={() => setValue(1)} style={notActive}><p>Programming</p></div>}
        {value === 2 ? <dov onClick={() => setValue(2)} className="text-white" style={active}><p>CS</p></dov> : <div onClick={() => setValue(2)} style={notActive}><p>CS</p></div>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {skills?.filter((item) => {
          if(value === 0) return item
          else if (value === 1) return item.type === 'pr'
          else return item.type === 'cs'
        }).map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillsSection

export const SkillCard = ({ skill }) => {
  return (
    <div className="shadow-md m-2 mx-1 dark:border-[1px] dark:border-gray-900">
      <div className="m-1 p-2 flex flex-col">
        <div className="flex justify-between items-center" direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <p style={{ fontWeight: 500, fontSize: '20px' }}>{skill.title}</p>
        </div>
        <p style={{ fontSize: '14px', color: 'gray' }}>{skill.description}</p>
      </div>
    </div>
  )
}