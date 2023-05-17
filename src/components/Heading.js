import React from 'react'

const Heading = ({title}) => {
  return (
    <div>
        <p className='md:text-[100px] text-[40px] opacity-20 font-thin bg-white dark:bg-black'>{title}</p>
    </div>
  )
}

export default Heading