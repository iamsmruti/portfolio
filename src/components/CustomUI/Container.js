import React from 'react'

const Container = ({children}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1200px] w-[100%] lg:px-0 md:px-3 px-2">
        {children}
      </div>
    </div>
  )
}

export default Container