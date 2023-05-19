import React from 'react'
import { customInput } from "@/assets/Styles"

const CustomInput = ({ onChange, placeholder, type }) => {
  return (
    <input type={type} className="shadow-md bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-900 w-[100%] mb-3" onChange={onChange} placeholder={placeholder} style={customInput} />
  )
}

export default CustomInput