import React from 'react'
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import EventList from '../../components/events/EventList';

import { getAllEvents } from '../../dummy-data-js'
import EventSearch from '../../components/events/EventSearch';

const index = () => {

  const events = getAllEvents()

  const router = useRouter();

  const findEventsHandler = (year, month) => {

    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <Box>
      <Typography fontSize="3rem" variant="h1" textAlign="center">All events</Typography>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Box>
  )
}

export default index
