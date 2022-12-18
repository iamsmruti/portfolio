import { Drawer } from '@mui/material'
import { Box, Stack } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Logo from './atoms/Logo'
import MenuButton from './atoms/MenuButton'

export const activeLink = {
    borderBottom: '2px solid white',
    marginLeft: 20,
}

export const link = {
    marginLeft: 20,
}

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const [path, setPath] = useState(router.asPath)

    useEffect(() => {
        setPath(router.asPath)
    }, [router])

    useEffect(() => {
        if (typeof window !== "undefined") {
            if(path === '/') scrollTo(0, 0)
            else if( path === '/#about') scrollTo(0, 700)
            else if( path === '/#skills') scrollTo(0, 2900)
            else if( path === '/#works') scrollTo(0, 1500)
            else if( path === '/#contact') scrollTo(0, 3700)
            else if( path === '/#experience') scrollTo(0, 2200)
        }
    }, [path])

    const menuItems = [
        {
            title: 'Home',
            path: ''
        },
        {
            title: 'About',
            path: '#about'
        },
        {
            title: 'Works',
            path: '#works'
        },
        {
            title: 'Experience',
            path: '#experience'
        },
        {
            title: 'Skills',
            path: '#skills'
        },
        {
            title: 'Contact',
            path: '#contact'
        }
    ]

    const drawer = () => {
        return (
            <Box
                sx={{ bgcolor: '#1e1e1e', width: 150, height: '100vh' }}
                onClick={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}
            >
                <Stack sx={{bgcolor: '#1e1e1e', p: 3}}>
                    {menuItems.map((item) => (
                        <Box onClick={() => { window.scrollTo(0, 700)}} sx={{ mb: {md: 0, xs: 2}}} key={item.title}>
                            {router.asPath === `/${item.path}` ?
                                <Link href={item.path}>
                                    <a style={activeLink}>{item.title}</a>
                                </Link> :
                                <Link href={item.path}>
                                    <a style={link}>{item.title}</a>
                                </Link>
                            }
                        </Box>
                    ))}
                </Stack>
            </Box>
        )
    }
    return (
        <>
            <Stack direction={'row'} alignItems={'center'}>
                <Logo />

                <Stack direction={'row'} sx={{ ml: 'auto', display: { md: 'flex', xs: 'none' } }}>
                    {menuItems.map((item, index) => (
                        <Box key={index}>
                            {router.asPath === `/${item.path}` ?
                                <Link href={item.path}>
                                    <a style={activeLink}>{item.title}</a>
                                </Link> :
                                <Link href={item.path}>
                                    <a style={link}>{item.title}</a>
                                </Link>
                            }
                        </Box>
                    ))}
                </Stack>

                <Box onClick={() => setOpen(true)} sx={{ display: { md: 'none', lg: 'none', xl: 'none', xs: 'flex' }, ml: 'auto' }}>
                    <MenuButton />
                </Box>

                <Drawer
                    anchor={'right'}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    {drawer()}
                </Drawer>
            </Stack>
        </>
    )
}

export default Navbar