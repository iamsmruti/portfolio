import { useRouter } from "next/router"
import React, { useEffect } from 'react'

const BlogCardSmall = ({ blog }) => {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 mb-10 border-b-[1px] dark:border-gray-800 pb-3">
      <div className="md:col-span-2 col-span-1 md:order-1 order-2 flex flex-col">
        <p onClick={() => router.push(`/blog/${blog.slug}`)} className="text-xl hover:underline hover:decoration-secondary cursor-pointer line-clamp-2">{blog.title}</p>
        <button onClick={() => router.push(`/blog/${blog.slug}`)} className="w-fit px-4 py-2 mt-5 text-secondary border-secondary border-[0.5px]">Read More</button>
      </div>
    </div>
  )
}

export default BlogCardSmall