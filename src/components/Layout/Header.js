import React from 'react'
import Logo from "../Logo"
import Container from '../CustomUI/Container'
import { useLocation, useNavigate } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const menu = [
    {name: 'Portfolio', path: '/'},
    // {name: 'Blog', path: '/blog'}
  ]

  return (
    <Container>
      <div className="py-10 flex justify-between items-center">
        <Logo />

        <div>
          <div className="flex text-xl">
            {menu.map((menu) => {
              if(location.pathname === menu.path) {
                return (
                  <div onClick={() => navigate(menu.path)} className="ml-5 underline cursor-pointer underline-offset-[5px] text-blue">{menu.name}</div>
                )
              } else {
                return (
                  <div onClick={() => navigate(menu.path)} className="ml-5 hover:underline underline-offset-[5px] cursor-pointer">{menu.name}</div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Header