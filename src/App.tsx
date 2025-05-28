import { BrowserRouter, Route, Routes } from "react-router-dom"
import Portfolio from "./modules/portfolio"
import Blog from "./modules/blog"
import Container from "./components/Container"
import BlogPage from "./modules/blog/_BlogPage"

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App