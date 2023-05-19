import Link from "next/link"
import React from 'react'

const Footer = () => {
  return (
    <div className="w-[100%] py-10 flex items-center flex-wrap">
      <div className="flex">
        <div className="flex flex-col mr-10">
          <p className="text-xl">About</p>
          <Link href="/"><p className="font-thin">Meet the Developer</p></Link>
        </div>

        <div className="flex flex-col">
          <p className="text-xl">Admin</p>
          <Link href="#"><p className="font-thin">Dashboard</p></Link>
        </div>
      </div>

      <div className="flex justify-center w-[100%] md:w-[70%] mt-10 md:mt-0">
        <p className="font-thin text-center">I run a Tech Blog as well. Check out <a href=""><span className="text-red-500 font-normal">here</span></a></p>
      </div>
    </div>
  )
}

export default Footer