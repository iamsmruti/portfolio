import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const LandingPage = () => {
  return (
    <Box sx={{height: 'calc(100vh - 60px)', display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
        <Stack sx={{ml: -1.5, mt: 'auto', mb: 'auto'}}>
            <Typography sx={{fontSize: {md: 180, xs: 100}, fontWeight: 600, color: '#1e1e1e'}}>HELLO,</Typography>
            <Typography sx={{fontSize: {md: 60, xs: 32}, fontWeight: 500, mt: {md: -7, xs: -4}, ml: 1.5}}>I&apos;m Smruti Ranjan</Typography>

            <Stack direction={'row'} sx={{ m: 1, p: 2}} justifyContent={'center'} alignContent={'center'}>
                <Typography sx={{fontSize: {md: 30, xs: 24}, fontWeight: 200}}>Web Developer</Typography>
            </Stack>

            <a rel="noreferrer" target={"_blank"} href="https://firebasestorage.googleapis.com/v0/b/portfolio-208ef.appspot.com/o/Smruti_Ranjan_Badatya.pdf?alt=media&token=281ce311-d2db-4559-bd5e-391ed6cf484e" download>
              <Stack direction={'row'} sx={{ m: 1, p: 2, border: '1px solid #1e1e1e', width: 'fit-content', ml: 'auto', mr: 'auto', bgcolor: 'black', cursor: 'pointer'}} justifyContent={'center'} alignContent={'center'}>
                  <Typography sx={{fontSize: 16, fontWeight: 200}}>My Resume</Typography>
              </Stack>
            </a>
        </Stack>
    </Box>
  )
}

export default LandingPage