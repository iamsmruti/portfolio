import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(localStorage.getItem('portfolio-theme'))
  }, [])

  return (
    <></>
  )
}

export default Home