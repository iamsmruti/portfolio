import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import Heading from '../Heading'

import { glassMorphism, active, notActive } from '../../assets/Styles'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import about from "../../data/about.data.json" assert { type: 'json' };

const About = () => {
  const [value, setValue] = useState(0)

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
              <Box>
                <Typography sx={{ fontSize: '16px', color: 'lightgray' }}>{about.self.bio_para1}</Typography>

                <Typography sx={{ fontSize: '16px', mt: 2, color: 'lightgray' }}>{about.self.bio_para2}</Typography>

                <Grid sx={{ mt: 6 }} container>
                  <Grid item md={6} xs={12}>
                    <Typography sx={{ color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Age: </span>. . . {about.self.age}</Typography>
                    <Typography sx={{ mt: 1, color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Freelance: </span>. . . {about.self.freelance}</Typography>
                    <Typography sx={{ mt: 1, color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Phone: </span>. . . {about.self.phone}</Typography>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <Typography sx={{ color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Nationality: </span>. . . {about.self.nationality}</Typography>
                    <Typography sx={{ mt: 1, color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Address: </span>. . . {about.self.address}</Typography>
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <Typography sx={{ mt: 1, color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Email: </span>. . . {about.self.email}</Typography>
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <Stack sx={{ mt: 4 }} direction={'row'}>
                      <a href={about.self.social.github.url} target={'_blank'} rel={'noreferrer'}>
                        <GitHubIcon sx={{fontSize: '30px', mt: -0.5, mr: 2.5, color: 'white'}}/>
                      </a>

                      <a href={about.self.social.twitter.url} target={'_blank'} rel={'noreferrer'}>
                        <img style={{ width: '25px', marginRight: '1.5rem', marginTop: '3px' }} src={'https://pngimg.com/uploads/twitter/twitter_PNG15.png'} />
                      </a>

                      <a style={{color: 'white'}} href={about.self.social.linkedin.url} target={'_blank'} rel={'noreferrer'}>
                        <LinkedInIcon sx={{fontSize: '30px', mt: -0.5, mr: 2.5, color: 'white'}}/>
                      </a>

                      <a href={about.self.social.instagram.url} target={'_blank'} rel={'noreferrer'}>
                        <img style={{ width: '35px', marginRight: '1.5rem', marginTop: '-5px' }} src={'https://i.pinimg.com/originals/64/c7/c8/64c7c86fd70cb2aea77b49fd340164b3.webp'} />
                      </a>

                      <a href={about.self.social.medium.url} target={'_blank'} rel={'noreferrer'}>
                        <img style={{ width: '35px', marginRight: '1.5rem', marginTop: '-5px' }} src={'https://cdn-icons-png.flaticon.com/512/5968/5968906.png'} />
                      </a>

                      <a href={about.self.social.leetcode.url} target={'_blank'} rel={'noreferrer'}>
                        <img style={{ width: '35px', marginRight: '1.5rem', marginTop: '-5px' }} src={'https://leetcode.com/static/images/LeetCode_logo_rvs.png'} />
                      </a>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Box>}

            {value === 1 && <Box style={glassMorphism} sx={{ height: 'auto', p: 2 }}>
              <>
                <Typography sx={{ fontSize: '16px', color: 'lightgray' }}>{about.education.bio}</Typography>
                <Grid sx={{ mt: 6 }} container>
                  <Grid item md={12} xs={12}>
                    <Typography sx={{ color: 'lightgray' }}><span style={{ color: 'lightblue' }}>Major: </span>. . . {about.education.major}</Typography>
                    <Typography sx={{ color: 'lightgray', mt: 1 }}><span style={{ color: 'lightblue' }}>Graduation: </span>. . . {about.education.graduation_year}</Typography>
                    <Typography sx={{ mt: 1, color: 'lightgray' }}><span style={{ color: 'lightblue' }}>CGPA: </span>. . . {about.education.cgpa} / 10</Typography>
                  </Grid>
                </Grid>
              </>
            </Box>}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default About