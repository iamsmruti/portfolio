import Heading from '@/components/Heading'
import { useState } from "react"

import { customInput, customTextArea } from '../../../assets/Styles'
import { supabase } from '../../../../supabaseConfig'

const ContactsSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const fetchData = async (name, email, message) => {
    const { data, error } = await supabase
      .from('contact')
      .insert([
        { name, email, message }
      ])

    alert('Your Message has been sent !')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetchData(name, email, message)
  }

  return (
    <div className="min-h-[80vh]" style={{ height: 'auto', marginBottom: 20}}>
      <Heading title={"CONTACT"} />

      <div className="max-w-[700px] w-[100%] mt-5">
        <input className="shadow-md bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-900 w-[100%] mb-3" onChange={(e) => setName(e.target.value)} placeholder='Your Name' style={customInput} />
        <input className="shadow-md bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-900 w-[100%] mb-3" onChange={(e) => setEmail(e.target.value)} placeholder='Your Email Address' style={customInput} />
        <textarea className="shadow-md bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-900 w-[100%] mb-3" onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' name="w3review" rows="4" style={customTextArea}>
        </textarea>

        <div className="">
          <button className="bg-[#70d6ff] text-black px-3 py-1" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ContactsSection