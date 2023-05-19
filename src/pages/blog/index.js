import BlogCard from "@/components/Sections/Blog/BlogCard"
import Footer from "@/components/Sections/Blog/Footer"
import React, { useState } from 'react'

const Blog = () => {
  const [category, setCategory] = useState(0)
  const states = [
    {
      name: 'All',
      category: 'all',
      state: 0
    },
    {
      name: 'About Me',
      category: 'me',
      state: 1
    },
    {
      name: 'About Tech',
      category: 'tech',
      state: 2
    }
  ]
  return (
    <div className='min-h-[100vh]'>
      <p className="font-thin">Browse Categories</p>
      <div className="flex mt-3 border-b-[1px] dark:border-gray-800 pb-5 mb-3">
        {states.map((item) => (
          <>
            {category === item.state && <p onClick={() => setCategory(item.state)} className="bg-black dark:text-black dark:bg-white text-white px-2 py-[2px] text-[14px] rounded-full mr-3 cursor-pointer">{item.name}</p>}
            {category !== item.state && <p onClick={() => setCategory(item.state)} className="border-[1px] dark:border-gray-800 px-2 py-[2px] text-[14px] rounded-full mr-3 cursor-pointer">{item.name}</p>}
          </>
        ))}
      </div>
      <div className="flex flex-col">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <Footer />
    </div>
  )
}

export default Blog