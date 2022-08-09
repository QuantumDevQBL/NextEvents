import { Box } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const MainHeader = () => {
  return (
    <Box
    sx={[
      {
        width: '100%',
        display: 'flex',
        background: '#44355B',
        justifyContent: 'space-around',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        marginBottom: 1,
        "& header": {
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          padding: '0 20px',
          flexDirection: {xs: 'column',sm: 'column', md: 'row'},
          alignItems: 'center',

        },
        "& li": {
          
        },
      }
    ]}
    >
      <header>
        <Logo />
        <Navbar />
      </header>
    </Box>
  )
}

export default MainHeader
