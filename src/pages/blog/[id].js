import BlogCardSmall from "@/components/Sections/Blog/BlogCardSmall"
import Footer from "@/components/Sections/Blog/Footer"
import React, { useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { VscCommentDiscussion } from 'react-icons/vsc'

const BlogPage = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-3 grid-cols-1 min-h-[100vh] gap-10">
        <div className="md:col-span-2">
          <p className="text-5xl leading-[4rem] font-thin">Application Error on Heroku! Here is the Solution that worked for me …</p>

          <div className="py-4 border-t-[1px] dark:border-gray-800 border-b-[1px] flex justify-between">
            <p className="font-thin"><span className="font-normal">Published At :</span> 25th May 2023</p>

            <div className="flex">
              <div className="flex mr-5">
                <p className="font-thin">143</p>
                <AiFillLike className="text-[20px] ml-3"/>
              </div>

              <div className="flex ">
                <p className="font-thin">143</p>
                <VscCommentDiscussion className="text-[20px] ml-3"/>
              </div>
            </div>
          </div>

          <img className="my-5" src="https://cdn.sanity.io/images/17ofu275/production/a5b9d357f09ecf038ca6073a85193d18313f68bf-1280x720.webp" />
        </div>

        <div className="px-5">
          <p className="text-2xl font-thin mb-5">Other Blogs</p>
          <BlogCardSmall />
          <BlogCardSmall />
          <BlogCardSmall />
          <BlogCardSmall />
          <BlogCardSmall />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogPage