import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Heading from '../Heading'

import { glassMorphism } from '../../assets/Styles'
import { supabase } from '../../supabaseConfig'

const Experience = () => {
  const [experience, setExperience] = useState([])

  const getData = async () => {
    const { data, error } = await supabase
      .from('experience')
      .select('*')
    setExperience(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box sx={{height: {md: 'calc(100vh - 60px)', xs: 'auto'}}}>
        <Heading title={'EXPERIENCE'}/>

        <Stack direction={'row'} flexWrap={'wrap'} sx={{justifyContent: {xs: 'center', md: 'flex-start'}}}>
        {experience?.map((experience, index) => (
          <Box sx={{ width: { xs: '280px', md: '350px' }, m: 1, p: 2 }} key={index} style={glassMorphism}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>{experience.title}</Typography>

              <Stack direction={'row'}>
                <a href={experience.linkedin} target={'_blank'} rel={'noreferrer'}>
                  <img style={{ width: '25px', marginRight: '1rem' }} src={'https://pnggrid.com/wp-content/uploads/2021/05/Linkedin-Logo-White-Circle-1024x1024.png'} />
                </a>
              </Stack>
            </Stack>
            <Typography sx={{fontSize: '14px', color: 'gray'}}>{experience.company} | {experience.start} - {experience.end}</Typography>
            <Typography sx={{ fontSize: '16px', mt: 2, color: 'lightgray'}}>{experience.description}</Typography>

            <Typography sx={{ color: 'lightgray', mt: 3 }}><span style={{ color: 'lightblue' }}>Tech Used: </span>{experience.tech.map((item) => (<>{item},  </>))}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default Experience