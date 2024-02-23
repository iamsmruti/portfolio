import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import NewsPaper from "./pages/Themes/NewsPaper"

const App = () => {
  useEffect(() => {
    if(!localStorage.getItem('portfolio-theme'))
      localStorage.setItem('portfolio-theme', 'news-paper')
  }, []) 

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news-paper" element={<NewsPaper />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App