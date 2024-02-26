import React from 'react'
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      
      <div>
        {children}
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout