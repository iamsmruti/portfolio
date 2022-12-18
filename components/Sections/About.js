import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Heading from '../Heading'

import { glassMorphism, active, notActive } from '../../assets/Styles'
import { supabase } from '../../supabaseConfig'

const About = () => {
  const [value, setValue] = useState(0)
  const [about, setAbout] = useState([])

  const getData = async () => {
    const { data, error } = await supabase
      .from('about')
      .select('*')

    setAbout(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box sx={{ height: { md: 'auto', xs: 'auto', mt: 5 } }}>
      <Grid container>
        <Box sx={{ display: { md: 'none', xs: 'block', mb: 5 } }}>
          <Heading title={"ABOUT"} />
        </Box>
        <Grid sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' }, pr: { md: 3, xs: 0 } }} item md={6}>
          <img style={{ width: '80%', filter: 'brightness(90%)' }} src={'https://cdn131.picsart.com/323853150299201.jpg'} />
        </Grid>
        <Grid item md={6}>
          <Box sx={{ mt: -4 }}>
            <Box sx={{ display: { md: 'block', xs: 'none' } }}>
              <Heading title={"ABOUT"} />
            </Box>


            <Stack direction={'row'} sx={{ mb: 2, mt: { md: 0, xs: 10 } }}>
              {value === 0 ? <Box onClick={() => setValue(0)} sx={active}><Typography>Bio</Typography></Box> : <Box onClick={() => setValue(0)} sx={notActive}><Typography>Bio</Typography></Box>}
              {value === 1 ? <Box onClick={() => setValue(1)} sx={active}><Typography>Education</Typography></Box> : <Box onClick={() => setValue(1)} sx={notActive}><Typography>Education</Typography></Box>}
            </Stack>

            {value === 0 && <Box style={glassMorphism} sx={{ height: 'auto', p: 2 }}>
              {about?.map((item, index) => (
                <Box key={index}>
                  <Typography sx={{ fontSize: '16px', color: 'lightgray' }}>{item.para1}</Typography>

                  <Typography sx={{ fontSize: '16px', mt: 2, color: 'lightgray' }}>{item.para2}</Typography>

                  <Grid sx={{ mt: 6 }} container>
                    <Grid item md={6} xs={12}>
                      <Typography sx={{ color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Age: </span>. . . {item.age}</Typography>
                      <Typography sx={{ mt: 1, color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Freelance: </span>. . . {item.freelance}</Typography>
                      <Typography sx={{ mt: 1, color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Phone: </span>. . . {item.phone}</Typography>
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <Typography sx={{ color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Nationality: </span>. . . {item.nationality}</Typography>
                      <Typography sx={{ mt: 1, color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Address: </span>. . . {item.address}</Typography>
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <Typography sx={{ mt: 1, color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Address: </span>. . . {item.email}</Typography>
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <Stack sx={{ mt: 4 }} direction={'row'}>
                        <a href={item.github} target={'_blank'} rel={'noreferrer'}>
                          <img style={{ width: '25px', marginRight: '1.5rem' }} src={'https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png'} />
                        </a>

                        <a href={item.twitter} target={'_blank'} rel={'noreferrer'}>
                          <img style={{ width: '25px', marginRight: '1.5rem', marginTop: '3px' }} src={'https://pngimg.com/uploads/twitter/twitter_PNG15.png'} />
                        </a>

                        <a href={item.linkedin} target={'_blank'} rel={'noreferrer'}>
                          <img style={{ width: '25px', marginRight: '1.5rem' }} src={'https://pnggrid.com/wp-content/uploads/2021/05/Linkedin-Logo-White-Circle-1024x1024.png'} />
                        </a>

                        <a href={item.instagram} target={'_blank'} rel={'noreferrer'}>
                          <img style={{ width: '35px', marginRight: '1.5rem', marginTop: '-5px' }} src={'https://i.pinimg.com/originals/64/c7/c8/64c7c86fd70cb2aea77b49fd340164b3.webp'} />
                        </a>

                        <a href={item.medium} target={'_blank'} rel={'noreferrer'}>
                          <img style={{ width: '35px', marginRight: '1.5rem', marginTop: '-5px' }} src={'https://cdn-icons-png.flaticon.com/512/5968/5968906.png'} />
                        </a>

                        <a href={item.leetcode} target={'_blank'} rel={'noreferrer'}>
                          <img style={{ width: '35px', marginRight: '1.5rem', marginTop: '-5px' }} src={'https://leetcode.com/static/images/LeetCode_logo_rvs.png'} />
                        </a>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Box>}

            {value === 1 && <Box style={glassMorphism} sx={{ height: 'auto', p: 2 }}>

              {about?.map((item, index) => (
                <>
                  <Typography sx={{ fontSize: '16px', color: 'lightgray' }}>I am currently pursuing my Bachelor&apos;s in Veer Surendra Sai University of Technology, Burla, Sambalpur, Odisha.</Typography>
                  <Grid key={index} sx={{ mt: 6 }} container>
                    <Grid item md={12} xs={12}>
                      <Typography sx={{ color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Major: </span>. . . {item.branch}</Typography>
                      <Typography sx={{ color: 'lightgray', mt: 1 }}><span style={{ color: 'lightblue' }}>Semester: </span>. . . 5th</Typography>
                      <Typography sx={{ mt: 1, color: 'lightgray' }}><span style={{ color: 'lightblue' }}>CGPA: </span>. . . {item.cgpa}</Typography>
                    </Grid>
                  </Grid>
                </>
              ))}
            </Box>}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default About