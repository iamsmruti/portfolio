import { Box, Typography } from '@mui/material'
import React from 'react'

const Heading = ({title}) => {
    return (
        <>
            <Typography sx={{ fontSize: {md: 100, xs: 50}, fontWeight: 600, color: '#1e1e1e', zIndex: 1, mt: {md: 0, xs: 10} }}>{title}</Typography>
            <Box sx={{ bgcolor: 'lightgray', height: {md: 6, xs: 4}, width: {md: 250, xs: 100}, mt: {md: -5, xs: -3}, zIndex: 5, position: 'absolute' }}></Box>
        </>
    )
}

export default Heading