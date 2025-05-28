import React, { useState } from "react"
import Heading from "../../../components/Heading"
import { FaLinkedin, FaExternalLinkAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const url = import.meta.env.VITE_GOOGLE_FORM_URL || ""
    console.log("Submitting to URL:", formData, url)

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
      })

      // Assuming the API returns JSON like { result: "success" } on success
      const result = await response.json()

      if (result.result === "success") {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your message has been recorded.",
        })

        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Something went wrong. Please try again later.",
      })
    }
  }

  return (
    <div className="mb-20">
      <Heading thin="Have a " thick="Word?" />
      <p className="text-2xl font-thin">Anything you would like to say or collaborate?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="sm:p-10">
          <p className="text-xl">Let's Connect</p>
          <a
            className="flex justify-between mt-6 bg-[#0f1413] hover:bg-black hover:border-[#0f1413] border-black rounded-xl border-[1px] font-thin p-5"
            href="https://www.linkedin.com/in/iamsmruti/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-xl" />
              <span>in/iamsmruti</span>
            </div>

            <FaExternalLinkAlt className="text-xl" />
          </a>

          <a
            className="flex justify-between mt-4 bg-[#0f1413] hover:bg-black hover:border-[#0f1413] border-black rounded-xl border-[1px] font-thin p-5"
            href="https://www.instagram.com/__iamsmruti"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-2">
              <AiFillInstagram className="text-xl" />
              <span>__iamsmruti</span>
            </div>

            <FaExternalLinkAlt className="text-xl" />
          </a>

          <p className="text-xl mt-14">Send me a Message</p>
          <a
            className="flex justify-between mt-6 bg-[#0f1413] hover:bg-black hover:border-[#0f1413] border-black rounded-xl border-[1px] font-thin p-5"
            href="mailto:smruti.ranjan@outlook.in"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-2">
              <MdEmail className="text-xl" />
              <span>smruti.ranjan@outlook.in</span>
            </div>

            <FaExternalLinkAlt className="text-xl" />
          </a>
        </div>

        <div className="bg-[#121212] rounded-xl p-10">
          <p className="text-xl">Let's Discuss your Project</p>

          {/* Show success or error message */}
          {formStatus.submitted && (
            <div
              className={`p-4 rounded-lg mb-6 ${
                formStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {formStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-6 bg-black rounded-xl font-thin p-5 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-4 bg-black rounded-xl font-thin p-5 text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full mt-4 rounded-xl bg-black font-thin p-5 text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 rounded-xl p-3 bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
