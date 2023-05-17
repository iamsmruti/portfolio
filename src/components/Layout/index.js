import React from 'react'
import Header from './Header'
import { motion, useScroll, useSpring } from "framer-motion";

const Layout = ({children}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <div>
    <motion.div className="progress-bar" style={{ scaleX }} />
    <div className='dark:bg-black dark:text-gray-200 w-[100%] flex justify-center'>
      <div className='w-[100%] max-w-[1100px] md:px-0 px-5'>
        <Header />
        {children}
      </div> 
    </div>
    </div>
  )
}

export default Layout