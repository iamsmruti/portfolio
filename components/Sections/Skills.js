import { Box, LinearProgress, Stack, Typography, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Heading from '../Heading'

import { glassMorphism, active, notActive } from '../../assets/Styles'
import { supabase } from '../../supabaseConfig'

const Skills = () => {
  const [skills, setSkills] = useState()
  const [value, setValue] = useState(0)

  const getData = async () => {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
    setSkills(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box sx={{ height: 'auto', mb: 8, minHeight: 'calc(110vh - 64px)' }}>
      <Heading title={"SKILLS"} />

      <Stack direction={'row'} sx={{ mb: 2, ml: 1 }}>
        {value === 0 ? <Box onClick={() => setValue(0)} sx={active}><Typography>All</Typography></Box> : <Box onClick={() => setValue(0)} sx={notActive}><Typography>All</Typography></Box>}
        {value === 1 ? <Box onClick={() => setValue(1)} sx={active}><Typography>Programming</Typography></Box> : <Box onClick={() => setValue(1)} sx={notActive}><Typography>Programming</Typography></Box>}
        {value === 2 ? <Box onClick={() => setValue(2)} sx={active}><Typography>CS</Typography></Box> : <Box onClick={() => setValue(2)} sx={notActive}><Typography>CS</Typography></Box>}
      </Stack>

      <Grid container>
        {value == 0 && skills?.map((skill, index) => (
          <Grid key={index} item md={6} xs={12}>
            <Stack sx={{ m: 1, p: 2 }} style={glassMorphism} direction={'column'}>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>{skill.title}</Typography>
              </Stack>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>{skill.description}</Typography>
            </Stack>
          </Grid>
        ))}
        {value == 1 && skills?.filter(item => item.type == 'pr').map((skill, index) => (
          <Grid key={index} item md={6} xs={12}>
            <Stack sx={{ m: 1, p: 2 }} style={glassMorphism} direction={'column'}>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>{skill.title}</Typography>
              </Stack>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>{skill.description}</Typography>
            </Stack>
          </Grid>
        ))}

        {value == 2 && skills?.filter(item => item.type == 'cs').map((skill, index) => (
          <Grid key={index} item md={6} xs={12}>
            <Stack sx={{ m: 1, p: 2 }} style={glassMorphism} direction={'column'}>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>{skill.title}</Typography>
              </Stack>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>{skill.description}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Skills