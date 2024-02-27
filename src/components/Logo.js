import React from 'react'

const Logo = () => {
  return (
    <div className="relative">
      <div className="font-slab text-[30px] font-bold">
        SMOOTHIE
      </div>
      <div className="bg-white h-1 w-1 absolute top-[45%] left-[47%]" />
      <div className="bg-white h-1 w-1 absolute top-[45%] left-[35%]" />
      <div className="h-[2px] w-[20%] left-[32%] absolute bottom-1 bg-white rounded-full"/>
    </div>
  )
}

export default Logo