import { useRouter } from "next/router"
import React from 'react'

const BlogCard = ({ blog }) => {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mb-10 border-b-[1px] dark:border-gray-800 pb-3">
      <div className="md:col-span-2 col-span-1 md:order-1 order-2 flex flex-col">
        <p onClick={() => router.push(`/blog/${blog.slug}`)} className="text-xl hover:underline hover:decoration-secondary cursor-pointer line-clamp-1">{blog.title}</p>
        <p className="font-thin mt-2 line-clamp-3">{blog.description}</p>
        <button onClick={() => router.push(`/blog/${blog.slug}`)} className="w-fit px-4 py-2 md:mt-auto mt-5 bg-secondary text-black">Read More</button>
      </div>
      <div className="col-span-1 md:order-2 order-1">
        <img className="cursor-pointer" onClick={() => router.push(`/blog/${blog.slug}`)} src={blog.header_img} />
      </div>
    </div>
  )
}

export default BlogCard