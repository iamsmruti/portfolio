import React from 'react'

const CustomChip = ({ text }) => {
  return (
    <div className="bg-blue mr-2 bg-opacity-55 px-3 py-0.5 rounded-full">
      <p className="text-[10px]">{text}</p>
    </div>
  )
}

export default CustomChip