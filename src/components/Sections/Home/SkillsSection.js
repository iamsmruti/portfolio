import Heading from '@/components/Heading'
import { useState, useEffect } from "react"

import { glassMorphism, active, notActive } from '../../../assets/Styles'
import { supabase } from '../../../../supabaseConfig'

import { BsLinkedin } from 'react-icons/bs'

const SkillsSection = () => {
  const [skills, setSkills] = useState()
  const [value, setValue] = useState(0)

  const getData = async () => {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
    setSkills(data)
  }

  useEffect(() => {
    getData()
  }, [])

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