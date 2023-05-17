import { useThemeStore } from '@/stores/themeStore'
import React from 'react'

const HelloText = () => {
  const theme = useThemeStore().theme
  return (
    <div>
        {theme === 'dark' && <div>
            <span className={`hello-dark md:text-[300px] text-[100px]`}>Hello,</span>
            <span className={`hello-dark md:text-[300px] text-[100px]`}>Hello,</span>
        </div>}
        {theme === 'light' && <div>
            <span className={`hello-light md:text-[300px] text-[100px]`}>Hello,</span>
            <span className={`hello-light md:text-[300px] text-[100px]`}>Hello,</span>
        </div>}
    </div>
  )
}

export default HelloText