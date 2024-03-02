import React from 'react'

const Container = ({children}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1000px] w-[100%] lg:px-0 md:px-10 sm:px-5 px-5">
        {children}
      </div>
    </div>
  )
}

export default Container