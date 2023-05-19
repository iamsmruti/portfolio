import { useRouter } from "next/router"
import React, { useEffect } from 'react'

const BlogCard = () => {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mb-10 border-b-[1px] dark:border-gray-800 pb-3">
      <div className="md:col-span-2 col-span-1 md:order-1 order-2 flex flex-col">
        <p onClick={() => router.push('/blog/1')} className="text-xl hover:underline hover:decoration-secondary cursor-pointer line-clamp-1">Application Error on Heroku! Here is the Solution that worked for me</p>
        <p className="font-thin mt-2 line-clamp-3">We often encounter application error problems on Heroku after deploying. This is often frustrating because the API works local but the moment we deploy, it gives an error. There can be various reasons for this. Like improper error handling, syntax error, and much more.</p>
        <button onClick={() => router.push('/blog/1')} className="w-fit px-4 py-2 md:mt-auto mt-5 bg-secondary text-black">Read More</button>
      </div>
      <div className="col-span-1 md:order-2 order-1">
        <img className="cursor-pointer" onClick={() => router.push('/blog/1')} src="https://cdn.sanity.io/images/17ofu275/production/a5b9d357f09ecf038ca6073a85193d18313f68bf-1280x720.webp" />
      </div>
    </div>
  )
}

export default BlogCard