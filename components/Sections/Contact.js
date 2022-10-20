import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Heading from '../Heading'

import { customInput, customTextArea } from '../../assets/Styles';
import { supabase } from '../../supabaseConfig';

const Contact = () => {
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
    <Box sx={{ height: 'auto', mb: 20}}>
      <Heading title={"CONTACT"} />

      <Box sx={{ maxWidth: '700px', width: '100%',mt: '50px'}}>
        <input onChange={(e) => setName(e.target.value)} placeholder='Your Name' style={customInput} />
        <input onChange={(e) => setEmail(e.target.value)} placeholder='Your Email Address' style={customInput} />
        <textarea onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' name="w3review" rows="4" style={customTextArea}>
        </textarea>

        <Button onClick={handleSubmit} sx={{ml: '1rem'}} variant='contained'>Submit</Button>
      </Box>
    </Box>
  )
}

export default Contact