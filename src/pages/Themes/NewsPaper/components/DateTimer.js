import moment from "moment"
import React, { useEffect, useState } from 'react'

const DateTimer = () => {
  const [dateString, setDateString] = useState('')
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateString(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])
  return (
    <p>{dateString}</p>
  )
}

export default DateTimer