import Heading from '@/components/Heading'
import { useState, useEffect } from "react"

import { glassMorphism, active, notActive } from '../../../assets/Styles'
import { supabase } from '../../../../supabaseConfig'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

const WorkSection = () => {
  const [value, setValue] = useState(0)
  const [works, setWork] = useState([])

  const getData = async () => {
    const { data, error } = await supabase
      .from('works')
      .select('*')
    setWork(data)
  }

  useEffect(() => {
    getData()
  }, [])

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