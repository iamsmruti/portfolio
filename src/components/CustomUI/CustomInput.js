import React from 'react'

const CustomInput = ({ onChange, placeholder, type }) => {
  return (
    <input type={type} className="shadow-md bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-900 w-[100%] mb-3" onChange={onChange} placeholder={placeholder}/>
  )
}

export default CustomInput