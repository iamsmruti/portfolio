import Heading from "../../../components/Heading";
import AgileCoderThumbnail from "../../../assets/blog-agilecoder.png";
import ArtfulCodingThumbnail from "../../../assets/artfulcoding.png";
import NihongoStudyThumbnail from "../../../assets/nihongo-study.png";

const MyBlogs = () => {
  const blogs = [
    {
      name: "Agile Coder Blogs",
      url: "https://blog.agilecoder.in",
      description: "A collection of my blogs on various topics related to software development, technology, and more.",
      image: AgileCoderThumbnail,
      tags: ["guides", "software development", "technology"]
    },
    {
      name: "Artful Coding",
      url: "https://artfulcoding.in",
      description: "My articles on Dev.to, covering a wide range of topics in software development.",
      image: ArtfulCodingThumbnail,
      tags: ["guides", "creative coding", "playground", "p5.js", "fractals"]
    },
    {
      name: "Nihongo Study",
      url: "https://nihongo-study.vercel.app",
      description: "My Hashnode blog where I share insights and tutorials on various programming topics.",
      image: NihongoStudyThumbnail,
      tags: ["blog", "personal", "japanese", "language learning"]
    }
  ];

  return (
    <div className="mb-[200px]">
      <Heading thin="My" thick="Blogs" />
      <p className="text-2xl font-thin">I love to write about many things.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-[#121212] text-black p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              <img
                src={blog.image}
                alt={blog.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </a>

            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-xl text-white mb-2 hover:underline">{blog.name}</h3>
            </a>

            <p className="text-gray-400 mb-4 font-light">{blog.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 border border-gray-300 rounded-full px-3 py-1 text-gray-800"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {blog.url ? (
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-light hover:text-gray-400"
              >
                Read more...
              </a>
            ) : (
              <span className="text-gray-400 italic">Coming soon</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
