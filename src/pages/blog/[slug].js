import BlogCardSmall from "@/components/Sections/Blog/BlogCardSmall"
import Footer from "@/components/Sections/Blog/Footer"
import dynamic from "next/dynamic"
import React, { useState, useEffect } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { VscCommentDiscussion } from 'react-icons/vsc'
import ResultComponent from "@/components/Sections/Blog/Result/ResultComponentNoSSR"
import { useRouter } from "next/router"
import axios from "axios"
import { API } from "@/assets/constants"
import { Mixpanel } from "../../../mixpanel"

const BlogPage = () => {
  const [blog, setBlog] = useState({})
  const [blogs, setBlogs] = useState([])
  const [data, setData] = useState(undefined)
  const router = useRouter()
  const { slug } = router.query

  console.log(slug)

  useEffect(() => {
    axios.get(`${API}/post/${slug}`).then((res) => {
      setBlog(res.data[0])
      setData(res.data[0].body[0])
      console.log(res.data[0].body)
    })

    axios.get(`${API}/post/all`).then((res) => {
      setBlogs(res.data)
    })

    Mixpanel.track("page", `${blog.title}`)
  }, [slug])

  const date = new Date(blog.createdAt)

  return (
    <div className="">
      <div className="grid md:grid-cols-3 grid-cols-1 min-h-[100vh] gap-10">
        <div className="md:col-span-2">
          <p className="text-5xl leading-[4rem] font-thin">{blog.title}</p>

          <div className="py-4 border-t-[1px] dark:border-gray-800 border-b-[1px] flex justify-between">
            <p className="font-thin"><span className="font-normal">Published At :</span> {date.toDateString().substring(4, 15)}</p>

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

          <img className="my-5" src={blog.header_img} />

          <ResultComponent data={data}/>
        </div>

        <div className="px-5">
          <p className="text-2xl font-thin mb-5">Other Blogs</p>

          {blogs?.filter((item) => item.slug !== blog.slug).map((blog) => (
            <BlogCardSmall blog={blog} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogPage