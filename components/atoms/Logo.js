import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Stack>
        <Link href={'/'}>
        <a>
            <Typography sx={{fontSize: {md: 32, xs: 32} , fontFamily: 'Major Mono Display', }}>SMRUTI</Typography>
        </a>
        </Link>
    </Stack>
  )
}

export default Logo