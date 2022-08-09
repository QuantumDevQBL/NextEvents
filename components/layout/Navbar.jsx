import Link from '@mui/joy/Link';
import { Box } from '@mui/system'
import React from 'react'
import { ModeToggle } from './Layout';

const Navbar = () => {
  return (
    <Box
      sx={[
        {
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          "& ul": {
            display: 'flex',
            listStyleType: 'none',
            padding: 0,
            justifyContent: {xs: 'space-between',sm: 'space-between',md: 'flex-end'},
            alignItems: 'center'
          },
          "& li": {

          },
          "& nav": {
            width: '100%',
          },
        }
      ]}
    >
      <nav>
        <ul>
          <li>
            <Link
              level="h5"
              underline="hover"
              color="neutral" variant="soft"
              href="/events"

              sx={{
                fontFamily: 'Lato',
                fontSize: '1.5rem', marginRight: '10px'
              }}>
              Browse all events
            </Link>
          </li>
          <li>
          <ModeToggle />
          </li>
        </ul>
      </nav>
    </Box>
  )
}

export default Navbar
