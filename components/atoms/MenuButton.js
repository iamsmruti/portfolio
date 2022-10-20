import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MenuButton = () => {
  return (
    <Stack sx={{height: 20}} justifyContent={'space-between'}>
        <Box sx={{bgcolor: 'white', height: 2, width: 25}}></Box>
        <Box sx={{bgcolor: 'white', height: 2, width: 25}}></Box>
        <Box sx={{bgcolor: 'white', height: 2, width: 25}}></Box>
    </Stack>
  )
}

export default MenuButton
