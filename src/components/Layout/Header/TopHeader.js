import React, { useState, useEffect } from 'react'
import Logo from '../Logo'
import { useThemeStore } from '@/stores/themeStore'

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import Link from 'next/link'
import { useRouter } from 'next/router'

const TopHeader = () => {
  const themeStore = useThemeStore()

  const toggleTheme = () => {
    if(localStorage.getItem('theme') === 'light'){
      localStorage.setItem('theme', 'dark')
      themeStore.setTheme('dark')
    }else if(localStorage.getItem('theme') === 'dark'){
      localStorage.setItem('theme', 'light')
      themeStore.setTheme('light')
    }

    console.log("first")
  }

  const router = useRouter()
  const [path, setPath] = useState(router.asPath)

  useEffect(() => {
      setPath(router.asPath)
  }, [router])

  const menuItems = [
    {
      title: 'Portfolio',
      path: '/'
    },
    {
      title: 'Blog',
      path: '/blog'
    }
  ]

  const activeLink = {
    borderBottom: themeStore.theme === 'dark' ? '2px solid white' : '2px solid black',
    marginLeft: 20,
  }

  const link = {
    marginLeft: 20,
  }

  return (
    <div className='flex justify-between items-center py-5'>
      <div>
        <Logo />
      </div>

      <div className='flex items-center'>
        <div className='flex items-center md:text-[18px] text-[14px]'>
          {menuItems.map((item) => (
            <div>
              {router.asPath === item.path ?
                  <Link href={item.path}>
                      <p style={activeLink}>{item.title}</p>
                  </Link> :
                  <Link href={item.path}>
                      <p style={link}>{item.title}</p>
                  </Link>
              }
            </div>
          ))}
        </div>
        <div className='md:text-[24px] text-[20px] cursor-pointer md:ml-10 ml-5' onClick={toggleTheme}>
          {themeStore.theme === 'light' && <BsFillMoonFill />}
          {themeStore.theme === 'dark' && <BsFillSunFill />}
        </div>
      </div>
    </div>
  )
}

export default TopHeader