import Heading from "../../../components/Heading"

const MyArticles = () => {
  const articles = [
    { 
      title: "Setting up a React Project From Scratch", 
      link: "https://blog.agilecoder.in/setting-up-a-react-project-from-scratch", 
      thumbnail: "https://s3-eu-north-1.amazonaws.com/agile-coder-bucket/2025/02/react-project-setup-in-2024.png", 
      description: "Learn how to set up a simple React project from scratch—no build tools required. This guide covers adding React via CDN, using JSX with Babel, and writing your first component for quick prototyping or learning.", 
      date: "Feb 3, 2025" 
    },
    {
      title: "Uncovering the Cardiod: Beauty, Math & Code", 
      link: "https://artfulcoding.in/blog/fractals/cardiod", 
      thumbnail: "https://artfulcoding.in/_next/image?url=%2Fassets%2Fthumbnails%2Fcardiod.png&w=3840&q=75", 
      description: "The cardioid is a unique and visually captivating mathematical shape, known for its heart-like form and presence in both nature and technology. From its intriguing mathematical structure to applications in art, sound engineering, and even planetary orbits, the cardioid offers a blend of aesthetic appeal and functional versatility.", 
      date: "May, 2024" 
    },
    {
      title: "SEO for Next.js: Optimize Your Application for Search Engines", 
      link: "https://blog.agilecoder.in/seo-for-next-js-how-to-optimize-your-application-for-search-engines/", 
      thumbnail: "https://s3-eu-north-1.amazonaws.com/agile-coder-bucket/2024/10/seo-in-nextjs-metadata-configurations-1.png", 
      description: "In this article, learn how to optimize SEO in Next.js by managing metadata and Open Graph properties for better social media previews. We also cover the importance of server-side rendering to boost search engine ranking and engagement, using simple yet effective techniques.", 
      date: "Oct 3, 2024" 
    },
    {
      title: "Let’s Know Japan", 
      link: "https://nihongo-study.vercel.app/lets-know-japan", 
      thumbnail: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8c485483-5c00-4d0a-89d7-4ddcd69ec5de/816d4888-5d88-4f70-a860-709a7b48470c/clou.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOZU7AV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T140109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQuKZoRou0sw0Zbk9ZRtY0SgGaOU56loD1ku2TVyoiNAIgClTBJ1hyqgLsV5G%2FwUDa%2FOw%2BPlcp48Hr7ZWNF%2BLdcIsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB4QID8XwrASox3X2CrcA5q5adbJbSfldlnprn3EA5DPewQvG2oPJ8VzMymFXQWNSDQ6RxSgnf2YQGb6Gty%2Fc10Q6XvTNVarNno1n%2F8YCoRnxjdV9XE0IEaiYZk%2BDVKHUPFhfORjR5gniRxnygh%2BrZpw5kGMIVwYuzVIV0oSMfjKPUcJ0cpzYZiQ64nzNXNoaCoFbyoc2pt2KtCERGup9jpUS%2FOUPS71GJ5uj1ChZ%2FszwdrLWyDeGpsXmu7B0rw3db7jCBEShEobUN%2BRdaTAx8rZgbKrezecX7lcnABKCrCJtD%2B%2B0dN3awNwYB%2BtvILUEE1J7wN35G9TOJ8eEXJEvJ78OpvBDRVzzfLBQ0R9lR72db%2FD7krm4uKeoL%2Bj0POfWR8SSCjFlNCFJvNHUPH4obC8kOLEolxQkFSgwU6RtiVWyQjH2FxPAxPSwIfSbPNzlsFcQER1eqPrmOG7MllXQ68JeVQgcUdB1hQQzEAJpkuh4Oa%2FPzsaOxjcQrUsVk1cDgDcfmjjsmO8J%2F9LKuoXwWSi5Jnd61uON5YPzzl1TefGy%2BLpFd1MHNbEYdP%2BRMuoYFrhQZaJmd4xSfU0Fx%2B9eHSCPy%2Bg00SAGrezTTbTNd2nz%2FGUhU1F44HG4MFCq1XE7%2BZTcn5EsofvIvVJMOmS3MEGOqUBrP9WMPraT8VP%2FzJVtE56Ih9WsmfkGwNdkg8pCndRosJueBl8Zymv4hOn1IdqV8caFSa4iNGQyPXH3qqszTexyKC%2FjFQ8WiPTPbkw5GfrdL945SMJdKXZtzgGaI0OB6BidcbnvLrpIQqESrNX6ehIy1VCg1XfEbRoBZhY7fao0Iq%2FBB8q2nojR6jZbWwPeAeOIqnZEX3aoLX4%2FUz6opTcN0qsHICc&X-Amz-Signature=2c41b396d5ed4c64ff4e7e30c13af1c58fad79c0e36b4766cd51c42e5237a840&X-Amz-SignedHeaders=host&x-id=GetObject", 
      description: "Japan is an island nation, where ancient traditions seamlessly blend with cutting-edge modernity. Because of this unique blend it is one of the dream destination of every traveller. It’s in the east side of the Asian Continent and spans an archipelago of 14,125 islands.", 
      date: "Jun 30, 2024" 
    },
    {
      title: "Simple Fractal Tree", 
      link: "https://artfulcoding.in/blog/fractals/simple_fractal_tree", 
      thumbnail: "https://artfulcoding.in/_next/image?url=%2Fassets%2Fthumbnails%2Fsimple_fractal_tree.png&w=3840&q=75", 
      description: "A fractal tree is a captivating mathematical construct that exhibits self-replicating patterns on multiple scales, resembling the intricate branches of a tree in nature. The concept of a fractal tree is derived from fractals, which are complex geometric shapes with repeating patterns regardless of the level of magnification. Each branch of a fractal tree serves as the foundation for smaller branches, which, in turn, create even tinier branches, forming an infinitely detailed and visually stunning structure.", 
      date: "May, 2024" 
    }
  ]

  return (
    <div className="mb-[200px]">
      <Heading thin="My" thick="Articles" />
      <p className="text-2xl font-thin">You can request guides as well. Feel Free!</p>

      <div>
        <div className="flex flex-col gap-4 mt-8">
          {articles.map((article, index) => (
            <div key={index} className="w-full rounded-lg shadow-md flex flex-wrap sm:flex-nowrap mb-5 sm:mb-0 sm:gap-5 hover:shadow-lg border-b-[1px] border-[#212121] transition-shadow duration-300">
              <img src={article.thumbnail} alt={article.title} className="sm:w-56 rounded-lg object-cover mb-4" />
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-400 mb-2 text-clip line-clamp-2">{article.description}</p>
                <div className="flex items-center justify-between w-full mt-2 sm:mb-0 mb-4">
                  <p className="text-gray-400 text-sm">{article.date}</p>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyArticles