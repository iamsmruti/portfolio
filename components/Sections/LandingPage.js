import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Type from '../atoms/Typewriter'
import { supabase } from '../../supabaseConfig'

const LandingPage = () => {
  const [about, setAbout] = useState([])

  const getData = async () => {
    const { data, error } = await supabase
      .from('about')
      .select('*')

    setAbout(data)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box sx={{height: 'calc(100vh - 60px)', display: 'flex', alignContent: 'center', justifyContent: 'center', transform: 'translateY(90px)'}}>
        <Stack sx={{ml: -1.5, mt: 'auto', mb: 'auto'}}>
            <Typography className='hello' component={"span"}  sx={{fontSize: {md: 180, xs: 100}, fontWeight: 600, color: '#1e1e1e'}}>HELLO,</Typography>
            <Typography className='hello' component={"span"}  sx={{fontSize: {md: 180, xs: 100}, fontWeight: 600, color: '#1e1e1e'}}>HELLO,</Typography>
            <Typography sx={{fontSize: {md: 60, xs: 32}, fontWeight: 500, mt: {md: -7, xs: -4}, ml: 1.5}}>I&apos;m Smruti Ranjan</Typography>

            <Stack direction={'row'} sx={{ m: 1, p: 2, fontSize: {md: 30, xs: 24}, fontWeight: 200}} justifyContent={'center'} alignContent={'center'}>
                <Type />
            </Stack>

            <a rel="noreferrer" target={"_blank"} href={about[0]?.cv} download>
              <Stack direction={'row'} sx={{ m: 1, p: 2, border: '1px solid #1e1e1e', width: 'fit-content', ml: 'auto', mr: 'auto', bgcolor: 'black', cursor: 'pointer'}} justifyContent={'center'} alignContent={'center'}>
                  <Typography sx={{fontSize: 16, fontWeight: 200}}>My Resume</Typography>
              </Stack>
            </a>
        </Stack>
    </Box>
  )
}

export default LandingPage