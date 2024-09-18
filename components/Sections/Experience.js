import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Heading from '../Heading'

import { glassMorphism } from '../../assets/Styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import experience from "../../data/experience.data.json" assert { type: 'json' };

const Experience = () => {
  return (
    <Box sx={{height: {md: 'calc(100vh - 60px)', xs: 'auto'}}}>
        <Heading title={'EXPERIENCE'}/>

        <Stack direction={'row'} flexWrap={'wrap'} sx={{justifyContent: {xs: 'center', md: 'flex-start'}}}>
        {experience?.map((experience, index) => (
          <Box sx={{ width: { xs: '280px', md: '320px' }, m: 1, p: 2 }} key={index} style={glassMorphism}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>{experience.designation}</Typography>

              <Stack direction={'row'}>
                <a href={experience.linkedin} target={'_blank'} rel={'noreferrer'}>
                  <LinkedInIcon sx={{fontSize: '30px', color: 'white'}} />
                </a>
              </Stack>
            </Stack>
            <Typography sx={{fontSize: '14px', color: 'gray'}}>{experience.company} | {experience.start_date} - {experience.end_date}</Typography>
            <Typography sx={{ fontSize: '16px', mt: 2, color: 'lightgray'}}>{experience.description}</Typography>

            <Typography sx={{ color: 'lightgray', mt: 3 }}><span style={{ color: 'lightblue' }}>Tech Used: </span>{experience.tech.map((item) => (<>{item},  </>))}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default Experience