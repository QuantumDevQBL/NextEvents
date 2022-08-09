import { Box, Typography } from '@mui/material'
import React from 'react'

import EventList from '../components/events/EventList'

import { getFeaturedEvents } from '../dummy-data-js'

const index = () => {

  const events = getFeaturedEvents()

  return (
    <Box>
      <Typography fontSize="3rem" variant="h1" textAlign="center">Welcome to the best events app ever</Typography>
      <EventList events={events} />
    </Box>
  )
}

export default index