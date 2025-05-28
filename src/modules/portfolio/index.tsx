import Career from "./sections/Career"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import FreelanceClients from "./sections/FreelanceClients"
import Hero from "./sections/Hero"
import Journey from "./sections/Journey"
import MyArticles from "./sections/MyArticles"
import MyBlogs from "./sections/MyBlogs"
import MyBooks from "./sections/MyBooks"
import MyVideos from "./sections/MyVideos"
import PetProjects from "./sections/PetProjects"
import Skills from "./sections/Skills"

const Portfolio = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Career />
      {/* <Journey /> */}
      <FreelanceClients />
      <Skills />
      <PetProjects />
      <MyVideos />
      <MyBooks />
      <MyArticles />
      <MyBlogs />
      <Contact />
      <Footer />
    </div>
  )
}

export default Portfolio