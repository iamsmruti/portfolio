import React from 'react'

const Container = ({children}) => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
        <div className="w-[90%]">
          {children}
        </div>
      </div>
  )
}

export default Container