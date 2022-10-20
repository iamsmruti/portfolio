import { Box, LinearProgress, Stack, Typography, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Heading from '../Heading'

import { supabase } from '../../supabaseConfig'

const Skills = () => {
  const [skills, setSkills] = useState()

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
    <Box sx={{ height: {md: 'calc(100vh - 60px)', xs: 'auto'} }}>
      <Heading title={"SKILLS"} />

      <Grid container>
        {skills?.map((skill) => (
          <Grid item md={6} xs={12} sx={{p: 3, pb: 2.5 }}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography sx={{ fontWeight: 300, fontSize: '14px' }}>{skill.title}</Typography>
              <Typography sx={{ fontWeight: 300, fontSize: '14px', color: 'lightblue' }}>{skill.value} %</Typography>
            </Stack>
            <LinearProgress sx={{ width: '100%'}} variant="determinate" value={skill.value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Skills