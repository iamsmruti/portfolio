import { Box, Stack, Typography, Grid } from '@mui/material'
import React, { useState } from 'react'
import Heading from '../Heading'

import { glassMorphism, active, notActive } from '../../assets/Styles'
import skills from "../../data/skills.data.json" assert { type: 'json' };

const Skills = () => {
  const [value, setValue] = useState(0);

  const menuItems = [
    { name: "All", state: 0, type: "all" },
    { name: "Front-end", state: 1, type: "frontend" },
    { name: "Back-end", state: 2, type: "backend" },
    { name: "Tools & DevOps", state: 3, type: "tools" },
  ]

  return (
    <Box sx={{ height: 'auto', mb: 8, minHeight: 'calc(110vh - 64px)' }}>
      <Heading title={"SKILLS"} />

      <Stack direction={'row'} sx={{ mb: 2, ml: 1 }}>
        {menuItems.map((menu) => (
          <Box
            sx={value === menu.state ? active : notActive}
            key={menu.state}
            onClick={() => setValue(menu.state)}
          >
            <Typography>{menu.name}</Typography>
          </Box>
        ))}
      </Stack>

      <Grid container>
        {value === 0 && (
          skills.map((skill, index) => {
            return (
              <Grid key={index} item md={6} xs={12}>
                <Stack sx={{ m: 1, p: 2 }} style={glassMorphism} direction={'column'}>
                  <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>{skill.tech}</Typography>
                  </Stack>
                  <Typography sx={{ fontSize: '14px', color: 'gray' }}>{skill.description}</Typography>
                </Stack>
              </Grid>
            )
          })
        )}
        
        {value === 1 && (
          skills.filter(item => item.type === "frontend").map((skill, index) => {
            return (
              <Grid key={index} item md={6} xs={12}>
                <Stack sx={{ m: 1, p: 2 }} style={glassMorphism} direction={'column'}>
                  <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>{skill.tech}</Typography>
                  </Stack>
                  <Typography sx={{ fontSize: '14px', color: 'gray' }}>{skill.description}</Typography>
                </Stack>
              </Grid>
            )
          }))}

        {value === 2 && (
          skills.filter(item => item.type === "backend").map((skill, index) => {
            return (
              <Grid key={index} item md={6} xs={12}>
                <Stack sx={{ m: 1, p: 2 }} style={glassMorphism} direction={'column'}>
                  <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>{skill.tech}</Typography>
                  </Stack>
                  <Typography sx={{ fontSize: '14px', color: 'gray' }}>{skill.description}</Typography>
                </Stack>
              </Grid>
            )
          }))}

        {value === 3 && (
          skills.filter(item => item.type === "tools").map((skill, index) => {
            return (
              <Grid key={index} item md={6} xs={12}>
                <Stack sx={{ m: 1, p: 2 }} style={glassMorphism} direction={'column'}>
                  <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>{skill.tech}</Typography>
                  </Stack>
                  <Typography sx={{ fontSize: '14px', color: 'gray' }}>{skill.description}</Typography>
                </Stack>
              </Grid>
            )
          }))}
      </Grid>
    </Box>
  )
}

export default Skills