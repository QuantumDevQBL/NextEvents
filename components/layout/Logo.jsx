import Link from '@mui/joy/Link';
import { Box } from '@mui/material'
import React from 'react'

const Logo = () => {
  return (
    <Box
      sx={[
        {
          display: 'flex',
        }
      ]}
    >
      <Link
        level="h5"
        underline="hover"
        variant="plain"
        href="/"
        sx={{
          fontFamily: 'Lato',
          fontSize: '1.5rem',
          color: 'white'

        }}>
        NextEvents
      </Link>
    </Box>
  )
}

export default Logo