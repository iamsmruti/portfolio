import Heading from "@/components/Heading"
import React, { useEffect, useState } from 'react'

import { active, notActive } from '../../../assets/Styles'
import { supabase } from '../../../../supabaseConfig'

import { BsGithub, BsLinkedin, BsTwitter, BsInstagram, BsMedium } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

const AboutSection = () => {
  const [value, setValue] = useState(0)
  const [about, setAbout] = useState([])

  const getData = async () => {
    const { data, error } = await supabase
      .from('about')
      .select('*')

    setAbout(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="min-h-[80vh] sm:ml-3">
        <Heading title={"ABOUT"}/>

        <div className="max-w-[700px]">
          <div className="flex mb-2 border-b-[1px] dark:border-gray-800">
            {value === 0 ? <div onClick={() => setValue(0)} className="text-white" style={active}><p>Bio</p></div> : <div onClick={() => setValue(0)} style={notActive}><p>Bio</p></div>}
            {value === 1 ? <div onClick={() => setValue(1)} className="text-white" style={active}><p>Education</p></div> : <div onClick={() => setValue(1)} style={notActive}><p>Education</p></div>}
          </div>

          {value === 0 && <div className="mt-3">
              {about?.map((item, index) => (
                <div key={index}>
                  <p className="text-[16px] opacity-80">{item.para1}</p>

                  <p className="text-[16px] opacity-80 mt-4">{item.para2}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
                    <div>
                      <p className="opacity-80"><span className="text-secondary">Age: </span>. . . {item.age}</p>
                      <p className="opacity-80 mt-1"><span className="text-secondary">Freelance: </span>. . . {item.freelance}</p>
                      <p className="opacity-80 mt-1"><span className="text-secondary">Phone: </span>. . . {item.phone}</p>
                    </div>

                    <div>
                      <p className="opacity-80"><span className="text-secondary">Nationality: </span>. . . {item.nationality}</p>
                      <p className="opacity-80 mt-1"><span className="text-secondary">Address: </span>. . . {item.address}</p>
                    </div>

                    <div className="md:col-span-2">
                      <p className="opacity-80 mt-1"><span className="text-secondary">Email: </span>. . . {item.email}</p>
                    </div>

                    <div className="md:col-span-2">
                      <div className="flex mt-10">
                        <a href={item.github} target={'_blank'} rel={'noreferrer'}>
                          <BsGithub className="text-[30px] mr-4 md:mr-5" />
                        </a>

                        <a href={item.twitter} target={'_blank'} rel={'noreferrer'}>
                          <BsTwitter className="text-[30px] mr-4 md:mr-5" />
                        </a>

                        <a href={item.linkedin} target={'_blank'} rel={'noreferrer'}>
                          <BsLinkedin className="text-[30px] mr-4 md:mr-5" />
                        </a>

                        <a href={item.instagram} target={'_blank'} rel={'noreferrer'}>
                          <BsInstagram className="text-[30px] mr-4 md:mr-5" />
                        </a>

                        <a href={item.medium} target={'_blank'} rel={'noreferrer'}>
                          <BsMedium className="text-[30px] mr-4 md:mr-5" />
                        </a>

                        <a href={item.leetcode} target={'_blank'} rel={'noreferrer'}>
                          <SiLeetcode className="text-[30px] mr-4 md:mr-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>}

            {value === 1 && <div>
              {about?.map((item, index) => (
                <>
                  <p className="text-[16px] opacity-80">I am currently pursuing my Bachelor&apos;s in Veer Surendra Sai University of Technology, Burla, Sambalpur, Odisha.</p>
                  <div key={index} sx={{ mt: 6 }} container>
                    <div className="mt-4">
                      <p className="opacity-80"><span className="text-secondary">Major: </span>. . . {item.branch}</p>
                      <p className="opacity-80 mt-1"><span className="text-secondary">Semester: </span>. . . 5th</p>
                      <p className="opacity-80 mt-1"><span className="text-secondary">CGPA: </span>. . . {item.cgpa}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>}
        </div>
      </div>
    </>
  )
}

export default AboutSection