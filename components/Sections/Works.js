import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState} from 'react'
import Heading from '../Heading'

import { glassMorphism, active, notActive } from '../../assets/Styles'
import { supabase } from '../../supabaseConfig'

const Works = () => {
  const [value, setValue] = useState(0)
  const [works, setWork] = useState([])

  const getData = async () => {
    const { data, error } = await supabase
      .from('works')
      .select('*')
    setWork(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box sx={{ height: {md: 'calc(100vh - 60px)', xs: 'auto'}, mt: 10 }}>
      <Heading title={'WORKS'} />

      <Stack direction={'row'} sx={{ mb: 2, ml: 1 }}>
        {value === 0 ? <Box onClick={() => setValue(0)} sx={active}><Typography>All</Typography></Box> : <Box onClick={() => setValue(0)} sx={notActive}><Typography>All</Typography></Box>}
        {value === 1 ? <Box onClick={() => setValue(1)} sx={active}><Typography>Web</Typography></Box> : <Box onClick={() => setValue(1)} sx={notActive}><Typography>Web</Typography></Box>}
        {value === 2 ? <Box onClick={() => setValue(2)} sx={active}><Typography>General</Typography></Box> : <Box onClick={() => setValue(2)} sx={notActive}><Typography>General</Typography></Box>}
      </Stack>

      <Stack direction={'row'} flexWrap={'wrap'} sx={{justifyContent : {xs: 'center', md: 'flex-start'}}}>
        {works?.filter((item) => {
          if(value === 1) return item.category === 'web'
          else if (value === 2) return item.category === 'general'
          else return item
        }).map((work, index) => (
          <Box key={index} sx={{ width: { xs: '280px', md: '350px' }, m: 1, p: 2 }} style={glassMorphism}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>{work.title}</Typography>

              <Stack direction={'row'}>
                <a href={work.github} target={'_blank'} rel={'noreferrer'}>
                  <img style={{ width: '25px', marginRight: '1rem' }} src={'https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png'} />
                </a>
                <a href={work.url} target={'_blank'} rel={'noreferrer'}>
                  <img style={{ width: '23px', marginTop: '0.1rem' }} src={'https://icon-library.com/images/website-icon-png-transparent/website-icon-png-transparent-9.jpg'} />
                </a>
              </Stack>
            </Stack>

            <Typography sx={{ fontSize: '16px', mt: 2, color: 'lightgray' }}>{work.description}</Typography>

            <Typography sx={{ color: 'lightgray', mt: 3 }}><span style={{ color: 'lightblue' }}>Tech Used: </span>{work.tech.map((item) => (<>{item},  </>))}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default Works